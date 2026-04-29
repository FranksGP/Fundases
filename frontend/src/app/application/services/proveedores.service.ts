import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../../domain/models/pagination.model';
import { Proveedor } from '../../domain/models/proveedor.model';

@Injectable({ providedIn: 'root' })
export class ProveedoresService {
  private readonly http = inject(HttpClient);
  private readonly api = 'http://127.0.0.1:8000/api/proveedores/';

  getProveedores(): Observable<Pagination<Proveedor>> {
    return this.http.get<Pagination<Proveedor>>(this.api);
  }
}
