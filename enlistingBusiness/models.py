from django.db import models

# Create your models here.
class EnlistBusiness(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    averagePrice = models.IntegerField()
    targetCustomers = models.CharField(max_length=100)
    description = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name
