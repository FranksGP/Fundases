from rest_framework.routers import DefaultRouter
from .api import CompraViewSet
from .views import CompraView

router = DefaultRouter()
router.register(r'compras', CompraViewSet, CompraView)

urlpatterns = router.urls