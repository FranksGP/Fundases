import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ComprasService } from '../../../../application/services/compras.service';
import { ProveedoresService } from '../../../../application/services/proveedores.service';
import { UsuariosService } from '../../../../application/services/usuarios.service';
import { Proveedor } from '../../../../domain/models/proveedor.model';
import { Usuario } from '../../../../domain/models/usuario.model';

@Component({
  selector: 'app-compras-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compras-create.html'
})
export class ComprasCreateComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly comprasService = inject(ComprasService);
  private readonly proveedoresService = inject(ProveedoresService);
  private readonly usuariosService = inject(UsuariosService);
  private readonly router = inject(Router);

  proveedores: Proveedor[] = [];
  usuarios: Usuario[] = [];
  isLoading = false;
  errorMessage = '';

  // Formulario reactivo con validaciones de campos obligatorios.
  form = this.fb.group({
    proveedor: [null as number | null, Validators.required],
    usuario: [null as number | null, Validators.required],
    numero_factura: ['', [Validators.required, Validators.maxLength(40)]],
    fecha: ['', Validators.required]
  });

  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe((r) => (this.proveedores = r.results));
    this.usuariosService.getUsuarios().subscribe((r) => (this.usuarios = r.results));
  }

  save(): void {
    if (this.form.invalid) return;
    this.isLoading = true;

    this.comprasService
      .createCompra(this.form.getRawValue() as any)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => this.router.navigate(['/compras']),
        error: () => (this.errorMessage = 'No fue posible guardar la compra.')
      });
  }
}
