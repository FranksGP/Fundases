import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComprasService } from '../../../../application/services/compras.service';
import { Compra } from '../../../../domain/models/compra.model';

@Component({
  selector: 'app-compras-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compras-detail.html'
})
export class ComprasDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly comprasService = inject(ComprasService);

  compra?: Compra;
  errorMessage = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comprasService.getCompra(id).subscribe({
      next: (response) => (this.compra = response),
      error: () => (this.errorMessage = 'No se pudo obtener el detalle de la compra.')
    });
  }
}
