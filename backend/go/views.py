from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.
def index(request):
    return render(request, 'index.html')

def api_add(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    added = num1 + num2
    resp_dict = {'result': added}
    
    return JsonResponse(resp_dict)

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()