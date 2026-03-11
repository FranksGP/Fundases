import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraService } from '../../../application/services/compra.service';
import { Compras } from '../../../domain/models/compra.model';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compras.html'
})
export class ComprasComponent implements OnInit {

  private compraService = inject(CompraService);

  compras: Compras[] = [];

  ngOnInit(): void {
    this.cargarCompras();
  }

  cargarCompras() {
    this.compraService.getCompras().subscribe({
      next: (data) => {
        this.compras = data;
      },
      error: (err) => {
        console.error('Error cargando compras', err);
      }
    });
  }
}