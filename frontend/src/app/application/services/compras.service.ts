import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../../domain/models/compra.model';
import { Pagination } from '../../domain/models/pagination.model';

export interface CompraPayload {
  proveedor: number;
  usuario: number;
  numero_factura: string;
  fecha: string;
}

@Injectable({ providedIn: 'root' })
export class ComprasService {
  private readonly http = inject(HttpClient);
  private readonly api = 'http://127.0.0.1:8000/api/compras/';

  getCompras(params?: Record<string, string | number>): Observable<Pagination<Compra>> {
    return this.http.get<Pagination<Compra>>(this.api, { params });
  }

  getCompra(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.api}${id}/`);
  }

  createCompra(data: CompraPayload): Observable<Compra> {
    return this.http.post<Compra>(this.api, data);
  }

  updateCompra(id: number, data: CompraPayload): Observable<Compra> {
    return this.http.put<Compra>(`${this.api}${id}/`, data);
  }

  deleteCompra(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}${id}/`);
  }
}
