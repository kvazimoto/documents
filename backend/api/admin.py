from django.contrib import admin
from .models import *


class NewsTagsAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['name']}


admin.site.register(Country)
admin.site.register(Skill)
admin.site.register(Advantages)
admin.site.register(Document)
admin.site.register(TransferAdvantage)
admin.site.register(TransferWay)
admin.site.register(ContactRequest)
admin.site.register(NewsParagraphs)
admin.site.register(News)
admin.site.register(NewsPoint)
admin.site.register(NewsTags, NewsTagsAdmin)
admin.site.register(Review)
