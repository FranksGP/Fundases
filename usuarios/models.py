from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Usuario(AbstractUser):
    
    ROLES = (
        ('admin', 'Administrador'),
        ('compras', 'Compras'),
        ('analista', 'Analista'),
    )

    rol = models.CharField(max_length=20, choices=ROLES)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.username