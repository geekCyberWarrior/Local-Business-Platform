from django.db import models
from django.contrib.auth.models import User
class Customer(models.Model): 
	user 		= models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True) 
	phone  		= models.CharField(max_length=10)
	first_name  = models.CharField(max_length=255)
	last_name 	= models.CharField(max_length=255)
	def __str__(self):
		return self.user.username

class Merchant(models.Model):
	user 		= models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
	tin 		= models.CharField(max_length=11)
	phone  		= models.CharField(max_length=10)
	first_name  = models.CharField(max_length=255)
	last_name 	= models.CharField(max_length=255)
	def __str__(self):
		return self.user.username

class TIDReference(models.Model):
	user 		= models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
	tin 		= models.CharField(max_length=11)
# Create your models here.
