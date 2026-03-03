from rest_framework import serializers
from .models import Compra, DetalleCompra


class DetalleCompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleCompra
        fields = ['descripcion', 'cantidad']

class CompraSerializer(serializers.ModelSerializer):
    detalles = DetalleCompraSerializer(many=True) # Agrega el campo detalles al serializer de Compra

    class Meta:
        model = Compra
        fields = '__all__'
        read_only_fields = ['usuario', 'fecha_creacion']

    def validate(self, data):
     if not self.initial_data.get('detalles'):
        raise serializers.ValidationError("La compra debe tener al menos un detalle.")
     return data    
    
    def create(self, validated_data):
        detalles_data = validated_data.pop('detalles')
        compra = Compra.objects.create(**validated_data)

        for detalle_data in detalles_data:
            DetalleCompra.objects.create(compra=compra, **detalle_data)

        return compra