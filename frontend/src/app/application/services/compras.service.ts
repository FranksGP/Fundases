import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '../../domain/models/pagination.model';
import { Compra } from '../../domain/models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private http = inject(HttpClient);

  private api = "http://127.0.0.1:8000/api/compras/";

  getCompras(params?: any){

    return this.http.get<Pagination<Compra>>(this.api,{
      params
    });

  }

  getCompra(id:number){

    return this.http.get<Compra>(`${this.api}${id}/`);

  }

  createCompra(data:any){

    return this.http.post<Compra>(this.api,data);

  }

  updateCompra(id:number,data:any){

    return this.http.put(`${this.api}${id}/`,data);

  }

  deleteCompra(id:number){

    return this.http.delete(`${this.api}${id}/`);

  }

}