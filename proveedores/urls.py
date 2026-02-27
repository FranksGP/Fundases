from rest_framework.routers import DefaultRouter
from .api import ProveedorViewSet

router = DefaultRouter()
router.register(r'proveedores', ProveedorViewSet)

urlpatterns = router.urls