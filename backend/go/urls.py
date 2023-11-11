from django.urls import path, include
from . import views
from rest_framework import routers

# Create and define router
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'coordinates', views.CoordinateViewSet)

urlpatterns = [
   path('api/', include(router.urls)),
]