import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../../domain/models/pagination.model';
import { Usuario } from '../../domain/models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private readonly http = inject(HttpClient);
  private readonly api = 'http://127.0.0.1:8000/api/usuarios/';

  getUsuarios(): Observable<Pagination<Usuario>> {
    return this.http.get<Pagination<Usuario>>(this.api);
  }
}
