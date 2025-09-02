from rest_framework import serializers
from .models import *


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Skill
        fields = '__all__'


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Document
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model =  Country
        fields = '__all__'


class TransferWaySerializer(serializers.ModelSerializer):

    skills = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
    documents = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)

    class Meta:
        model = TransferWay
        fields = '__all__'
        depth = 2


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = '__all__'


class NewsTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsTags
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    tags = NewsTagsSerializer(many=True)

    class Meta:
        model = News
        fields = '__all__'
        depth = 3



class ReviewSerializer(serializers.ModelSerializer):
    video_url = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ["id", "author", "text", "video_url"]

    def get_video_url(self, obj):
        request = self.context.get("request")
        if obj.video:
            return request.build_absolute_uri(obj.video.url)
        return None