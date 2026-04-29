import { Proveedor } from "./proveedor.model";
import { Usuario } from "./usuario.model";

export interface Compra {
  id: number;
  proveedor: Proveedor;
  usuario: Usuario;
  numero_factura: string;
  fecha: string;
}