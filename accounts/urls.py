from .views import RegisterAPI,LoginAPI,MerchantProfileAPI,CustomerProfileAPI
from knox import views as knox_views
from django.urls import path

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('merchantProfile/<int:pk>', MerchantProfileAPI.as_view(), name='merchantProfile'),
    path('customerProfile/', CustomerProfileAPI.as_view(), name='customerProfile'),

]