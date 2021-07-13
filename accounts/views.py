from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, CustomerProfileSerializer, MerchantProfileSerializer
from django.contrib.auth.models import User
from .models import Merchant,Customer, TIDReference
from django.utils import timezone
from datetime import timedelta

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        print(user, type(user))
        print(request.data)
        TIDReference(user=user, tin=request.data.get('tin')).save()
        return Response({
        # "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1],
		"expiry": timezone.now() + timedelta(hours=10)
        })

from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)

class MerchantProfileAPI(generics.GenericAPIView):
	serializer_class = MerchantProfileSerializer

	def post(self, request, pk, *args, **kwargs):
		try:
			user=User.objects.get(pk=pk)
		except:
			return Response({'ERROR':'USER NOT FOUND'})

		serializer = self.get_serializer(data=request.data)
		print('###################',serializer.is_valid(raise_exception=True))
		validated_data=serializer.validated_data
		print(validated_data)
		profile=Merchant(user=user,tin=validated_data['tin'],phone=validated_data['phone'],first_name=validated_data['first_name'],last_name=validated_data['last_name'])
		profile.save()
		return Response({
		"profile": "DONE"
		})

class CustomerProfileAPI(generics.GenericAPIView):
	serializer_class = CustomerProfileSerializer

	def post(self, request, pk, *args, **kwargs):
		try:
			user=User.objects.get(pk=pk)
		except:
			return Response({'ERROR':'USER NOT FOUND'})

		serializer = self.get_serializer(data=request.data)
		print('###################',serializer.is_valid(raise_exception=True))
		validated_data=serializer.validated_data
		print(validated_data)
		profile=Customer(user=user,tin=validated_data['tin'],phone=validated_data['phone'],first_name=validated_data['first_name'],last_name=validated_data['last_name'])
		profile.save()
		return Response({
		"profile": "DONE"
		})