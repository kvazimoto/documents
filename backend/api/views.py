# views.py
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from . import models
from . import serializers
from django.db.models import Count, Q, IntegerField, Case, When, Value
from .telegram import send_telegram_message
from django.utils.html import escape
from .recommendations import recommend_transfer_ways


class TransferWayViewSet(viewsets.ModelViewSet):
    queryset = models.TransferWay.objects.all()
    serializer_class = serializers.TransferWaySerializer

    @action(detail=False, methods=['post'])
    def recommend(self, request):
        data = request.data
        country_id = data.get('country_id')
        skills = data.get('skills') or []
        urgency = data.get('urgency')  # 'instant' | 'normal' | 'longterm'

        qs = models.TransferWay.objects.all()

        # 1) страна — строгое совпадение (если надо менять — ослабим)
        if country_id:
            qs = qs.filter(country_id=country_id)

        # 2) матч по навыкам (сколько совпало)
        if skills:
            qs = qs.annotate(
                matched_skills=Count('skills', filter=Q(skills__in=skills), distinct=True)
            )
        else:
            qs = qs.annotate(matched_skills=Value(0, output_field=IntegerField()))

        # 3) срочность: если instant — поднимаем instantly=True
        qs = qs.annotate(
            inst_weight=Case(
                When(instantly=True, then=Value(1)),
                default=Value(0),
                output_field=IntegerField()
            )
        )

        if urgency == 'instant':
            qs = qs.order_by('-inst_weight', '-matched_skills', 'duration_days', 'needed_sum', 'id')
        else:
            qs = qs.order_by('-matched_skills', 'duration_days', 'needed_sum', 'id')

        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)


class ContactRequestViewSet(viewsets.ModelViewSet):
    queryset = models.ContactRequest.objects.all()
    serializer_class = serializers.ContactSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        data = response.data

        telegram = data.get('telegram')
        transfer_way_value = data.get('transfer_way')
        answers = data.get('answers_json') or {}

        # Получим название способа выезда (id или текст)
        way_name = ''
        if transfer_way_value:
            if isinstance(transfer_way_value, int):  # если пришёл id
                try:
                    way = models.TransferWay.objects.get(id=transfer_way_value)
                    way_name = f"{way.name} — {way.country.name if way.country else ''}"
                except models.TransferWay.DoesNotExist:
                    pass
            else:  # если пришёл текст
                way_name = transfer_way_value

        msg = [
            "📩 <b>Новая заявка</b>",
            f"👤 Telegram: {escape(telegram) if telegram else '-'}",
            f"🧭 Выбранный способ: {escape(way_name) if way_name else '-'}",
            "— — —",
            "<b>Ответы формы:</b>"
        ]

        for key, answer in answers.items():
            value = answer.get('value')
            label = answer.get('label', key.capitalize())

            # transfer_way отдельно обрабатываем выше
            if key == "transfer_way":
                continue

            if key == "country_id" and value:
                try:
                    country = models.Country.objects.get(id=value)
                    value = country.name
                except models.Country.DoesNotExist:
                    pass
            elif key == "skills" and value:
                skills_qs = models.Skill.objects.filter(id__in=value)
                value = ", ".join(skill.name for skill in skills_qs) if skills_qs else "-"
            elif isinstance(value, bool):
                value = "Да" if value else "Нет"

            msg.append(f"{label}?\n{value}")

        send_telegram_message("\n".join(msg))
        return response



class SkillsViewSet(viewsets.ModelViewSet):
    queryset = models.Skill.objects.all()
    serializer_class = serializers.SkillSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = models.Document.objects.all()
    serializer_class = serializers.DocumentSerializer


class CountryViewSet(viewsets.ModelViewSet):
    queryset = models.Country.objects.all()
    serializer_class = serializers.CountrySerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = models.News.objects.all().order_by('-created_at')
    serializer_class = serializers.NewsSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        tag_slug = self.request.query_params.get('tag')
        if tag_slug and tag_slug != "all":
            queryset = queryset.filter(tags__slug=tag_slug)
        return queryset

    @action(detail=False, methods=['get'])
    def tags(self, request):
        tags = models.NewsTags.objects.all()
        serializer = serializers.NewsTagsSerializer(tags, many=True)
        return Response(serializer.data)



class ReviewViewSet(viewsets.ModelViewSet):
    queryset = models.Review.objects.all().order_by("-created_at")
    serializer_class = serializers.ReviewSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context


