from django.db import models
from proveedores.models import Proveedor
from usuarios.models import Usuario


class Compra(models.Model):
    proveedor = models.ForeignKey(Proveedor, on_delete=models.PROTECT)
    usuario = models.ForeignKey(Usuario, on_delete=models.PROTECT)
    numero_factura = models.CharField(max_length=50)
    fecha = models.DateField()
    estado = models.CharField(max_length=20, default="REGISTRADA")
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Compra {self.numero_factura}"

class DetalleCompra(models.Model):
    id_centroCosato = models.CharField(max_length=50)
    compra = models.ForeignKey(Compra, on_delete=models.CASCADE, related_name='detalles')
    proveedor_sujerido = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=200)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    id_estado = models.CharField(max_length=20)
    observacones = models.TextField(blank=True, null=True)



    def subtotal(self):
        return self.cantidad * self.precio_unitario
# Create your models here.
