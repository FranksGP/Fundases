import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ComprasService } from '../../../../application/services/compras.service';
import { Router } from '@angular/router';

@Component({
selector:'app-compras-create',
standalone:true,
imports:[ReactiveFormsModule],
templateUrl:'./compras-create.html'
})
export class ComprasCreateComponent{

private fb = inject(FormBuilder);
private comprasService = inject(ComprasService);
private router = inject(Router);

form = this.fb.group({

proveedor:[''],
numero_factura:[''],
fecha:['']

});

save(){

this.comprasService.createCompra(this.form.value)
.subscribe(()=>{

this.router.navigate(['/compras']);

});

}

}