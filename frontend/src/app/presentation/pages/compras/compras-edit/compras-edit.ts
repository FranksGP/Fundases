import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ComprasService } from '../../../../application/services/compras.service';

@Component({
  selector: 'app-compras-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compras-edit.html'
})
export class ComprasEditComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly comprasService = inject(ComprasService);

  id = Number(this.route.snapshot.paramMap.get('id'));
  isLoading = false;
  errorMessage = '';

  form = this.fb.group({
    proveedor: [null as number | null, Validators.required],
    usuario: [null as number | null, Validators.required],
    numero_factura: ['', [Validators.required, Validators.maxLength(40)]],
    fecha: ['', Validators.required]
  });

  ngOnInit(): void {
    this.comprasService.getCompra(this.id).subscribe((compra) => this.form.patchValue(compra as any));
  }

  save(): void {
    if (this.form.invalid) return;
    this.isLoading = true;

    this.comprasService
      .updateCompra(this.id, this.form.getRawValue() as any)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => this.router.navigate(['/compras']),
        error: () => (this.errorMessage = 'No fue posible actualizar la compra.')
      });
  }
}
