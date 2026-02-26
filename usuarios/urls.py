from rest_framework.routers import DefaultRouter
from .api import UsuarioViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

urlpatterns = router.urls