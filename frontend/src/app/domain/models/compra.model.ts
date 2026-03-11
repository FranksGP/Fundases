import { Proveedor } from "./proveedor.model";
import { Usuario } from "./usuario.model";

export interface Compras {
  id: number;
  proveedor: Proveedor;
  usuario: Usuario;
  fecha: string;
}