from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Compra
from .serializers import CompraSerializer


class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.rol == "admin":
            return Compra.objects.all()
        else:
            return Compra.objects.filter(usuario=user)
    
    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)