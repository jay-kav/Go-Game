from django.urls import path, include
from . import views
from rest_framework import routers

# Create and define router
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
   path('', views.index, name="index"),
   path('add', views.api_add, name="api_add"),
   path('api/', include(router.urls)),
]