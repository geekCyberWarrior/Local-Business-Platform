from django.shortcuts import render
from rest_framework import viewsets

from .serializers import EnlistBusinessSerializer
from .models import EnlistBusiness

# Create your views here.
class EnlistBusinessViewSet(viewsets.ModelViewSet):
    serializer_class = EnlistBusinessSerializer

    def get_queryset(self):
        queryset = EnlistBusiness.objects.all()
        category = self.request.query_params.get('category')
        name = self.request.query_params.get('name')
        if category is not None:
            queryset = queryset.filter(category__startswith=category)
        elif name is not None:
            queryset = queryset.filter(name__startswith=name)
        return queryset
