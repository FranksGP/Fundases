from django.shortcuts import render
from rest_framework import viewsets
from compras.models import Compra
from compras.serializers import CompraSerializer
from .permissions import EsAdminOCompras


class CompraView(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
    permission_classes = [EsAdminOCompras]

    def get_queryset(self):
     user = self.request.user

     if user.rol in ['admin', 'compras']:
        return Compra.objects.all()

     if user.rol == 'proveedor':
        return Compra.objects.filter(proveedor__usuario=user)

     return Compra.objects.none()