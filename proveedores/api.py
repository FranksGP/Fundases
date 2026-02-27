from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Proveedor
from .serializers import ProveedorSerializer


class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all() # Indica qué datos va a consultar de la base de datos.
    serializer_class = ProveedorSerializer # Convierte datos Python ↔ JSON.
    permission_classes = [IsAuthenticated] # Solo usuarios autenticados pueden usar estos endpoints.