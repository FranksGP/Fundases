import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { ComprasService } from '../../../../application/services/compras.service';
import { Compra } from '../../../../domain/models/compra.model';

@Component({
  selector: 'app-compras-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compras-list.html'
})
export class ComprasListComponent implements OnInit {
  private readonly comprasService = inject(ComprasService);

  compras: Compra[] = [];
  isLoading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadCompras();
  }

  loadCompras(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.comprasService
      .getCompras()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => (this.compras = response.results),
        error: () => (this.errorMessage = 'No fue posible cargar las compras.')
      });
  }

  deleteCompra(id: number): void {
    if (!confirm('¿Eliminar compra?')) return;

    this.comprasService.deleteCompra(id).subscribe({
      next: () => this.loadCompras(),
      error: () => (this.errorMessage = 'No fue posible eliminar la compra.')
    });
  }
}
