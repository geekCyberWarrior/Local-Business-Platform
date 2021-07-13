from rest_framework import serializers
from .models import EnlistBusiness

class EnlistBusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnlistBusiness
        fields = '__all__'
