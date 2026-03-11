import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compras } from '../../domain/models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private http = inject(HttpClient);

  private API_URL = 'http://127.0.0.1:8000/api/compras/'; // Ajusta si tu ruta es diferente

  getCompras(): Observable<Compras[]> {
    return this.http.get<Compras[]>(this.API_URL);
  }
}