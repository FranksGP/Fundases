from rest_framework.routers import DefaultRouter
from .api import CompraViewSet

router = DefaultRouter()
router.register(r'compras', CompraViewSet)

urlpatterns = router.urls