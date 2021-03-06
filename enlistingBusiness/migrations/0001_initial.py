# Generated by Django 2.2.19 on 2021-04-05 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EnlistBusiness',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
                ('avgPrices', models.IntegerField()),
                ('targetCustomers', models.CharField(max_length=100)),
                ('location', models.CharField(blank=True, max_length=50, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('contactDetails', models.CharField(blank=True, max_length=40, null=True)),
            ],
        ),
    ]
