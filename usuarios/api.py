from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Usuario
from .serializers import UsuarioSerializer

# La clase UsuarioViewSet es una vista basada en conjuntos de vistas (viewsets) que proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo Usuario. La propiedad queryset define el conjunto de datos que se utilizará para las operaciones, en este caso, todos los objetos de Usuario. La propiedad serializer_class especifica el serializer que se utilizará para convertir los objetos de Usuario a formatos como JSON o XML y viceversa, en este caso, el UsuarioSerializer.
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all() # Define el conjunto de datos que se utilizará para las operaciones CRUD, en este caso, todos los objetos de Usuario.
    serializer_class = UsuarioSerializer # Especifica el serializer que se utilizará para convertir los objetos de Usuario a formatos como JSON o XML y viceversa, en este caso, el UsuarioSerializer.
    permission_classes = [IsAuthenticated] # Establece que solo los usuarios autenticados pueden acceder a esta vista, lo que significa que se requiere autenticación para realizar cualquier operación en el conjunto de vistas de Usuario.