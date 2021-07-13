from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Merchant,Customer 

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','password',)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

class MerchantProfileSerializer(serializers.ModelSerializer):
      
    class Meta:
        model = Merchant
        fields = ('tin','phone','first_name','last_name')


class CustomerProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Customer
        fields = ('phone','first_name','last_name') 
