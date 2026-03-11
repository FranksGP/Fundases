import { Component, inject, OnInit } from '@angular/core';
import { ComprasService } from '../../../../application/services/compras.service';
import { Compra } from '../../../../domain/models/compra.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-compras-list',
standalone:true,
imports:[
CommonModule,
RouterModule
],
templateUrl:'./compras-list.html'
})
export class ComprasListComponent implements OnInit{

private comprasService = inject(ComprasService);

compras:Compra[] = [];

count=0;

next:string|null=null;
previous:string|null=null;

ngOnInit(){

this.loadCompras();

}

loadCompras(url?:string){

this.comprasService.getCompras().subscribe(res=>{

this.compras = res.results;
this.count = res.count;
this.next = res.next;
this.previous = res.previous;

});

}

deleteCompra(id:number){

if(confirm("¿Eliminar compra?")){

this.comprasService.deleteCompra(id).subscribe(()=>{

this.loadCompras();

});

}

}

}