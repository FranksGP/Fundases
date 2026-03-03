from rest_framework.permissions import BasePermission


class EsAdminOCompras(BasePermission):
    def has_permission(self, request, view):
        return request.user.rol in ['admin', 'compras']


class EsProveedor(BasePermission):
    def has_permission(self, request, view):
        return request.user.rol == 'proveedor'