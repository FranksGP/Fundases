from rest_framework.routers import DefaultRouter
from .api import UsuarioViewSet

# El router es una herramienta proporcionada por Django REST Framework que facilita la creación de rutas para las vistas basadas en conjuntos de vistas (viewsets). En este caso, se crea una instancia de DefaultRouter y se registra el UsuarioViewSet con la ruta 'usuarios'. Esto generará automáticamente las rutas necesarias para las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en el modelo Usuario. Finalmente, se asignan las rutas generadas por el router a urlpatterns, lo que permite que estas rutas estén disponibles en la aplicación.
router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

# Las rutas generadas por el router se asignan a urlpatterns, lo que permite que estas rutas estén disponibles en la aplicación.
urlpatterns = router.urls