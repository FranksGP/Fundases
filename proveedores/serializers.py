from rest_framework import serializers
from .models import Proveedor


class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__' # Esto indica que se incluirán todos los campos del modelo Proveedor en la serialización.
