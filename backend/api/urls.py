from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'transfer_ways', views.TransferWayViewSet, basename='transfer_way')
router.register(r'skills', views.SkillsViewSet, basename='skill')
router.register(r'documents', views.DocumentViewSet, basename='document')
router.register(r'countries', views.CountryViewSet, basename='country')
router.register(r'news', views.NewsViewSet, basename='news')
router.register(r'reviews', views.ReviewViewSet, basename='review')
router.register(r'contactrequests', views.ContactRequestViewSet, basename='contactrequest')


urlpatterns = router.urls
