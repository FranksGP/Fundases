from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Compra
from .serializers import CompraSerializer

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
    # permission_classes = [IsAuthenticated]  # Temporalmente comentado para pruebas

    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['proveedor', 'fecha', 'usuario']
    ordering_fields = ['usuario', 'fecha']
   
    def get_queryset(self):
        user = self.request.user
        queryset = Compra.objects.all()

        if user.rol != "admin":
            queryset = queryset.filter(usuario=user)

        return queryset

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)