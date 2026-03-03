from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Proveedor
from .serializers import ProveedorSerializer
from .permissions import EsAdminProveedor


# Solo usuarios autenticados pueden usar estos endpoints.
class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all() # Indica qué datos va a consultar de la base de datos.
    serializer_class = ProveedorSerializer # Convierte datos Python ↔ JSON.
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [EsAdminProveedor]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]