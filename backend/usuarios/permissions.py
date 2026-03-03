from rest_framework.permissions import BasePermission

# crar permisos personalizados
class EsAdmin(BasePermission):
   def has_permission(self, request, view):# 
        # El método has_permission se encarga de verificar si el usuario que realiza la solicitud tiene los permisos necesarios para acceder a la vista. En este caso, se verifica si el usuario está autenticado y si su rol es "ADMIN". Si ambas condiciones se cumplen, se devuelve True, lo que permite el acceso a la vista; de lo contrario, se devuelve False, lo que deniega el acceso.
        return request.user.is_authenticated and request.user.rol == "admin" # Verifica si el usuario está autenticado y si su rol es "ADMIN".
   
class EsActivo(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.activo # Verifica si el usuario está autenticado y si su estado es "activo".