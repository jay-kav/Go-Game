from django.db import models

# Every time a model is made:
# python manage.py makemigrations
# python manage.py migrate

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)