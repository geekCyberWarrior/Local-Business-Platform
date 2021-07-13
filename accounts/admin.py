from django.contrib import admin
from .models import Customer,Merchant, TIDReference

admin.site.register(Customer)
admin.site.register(Merchant)
admin.site.register(TIDReference)

# Register your models here.
