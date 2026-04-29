import { Routes } from '@angular/router';
import { authGuard } from './application/guards/auth.guard';
import { LoginComponent } from './presentation/pages/login/login';
import { MainLayoutComponent } from './presentation/layouts/main-layout/main-layout';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./presentation/pages/dashboard/dashboard').then((m) => m.DashboardComponent)
      },
      {
        path: 'compras',
        loadComponent: () =>
          import('./presentation/pages/compras/compras-list/compras-list').then((m) => m.ComprasListComponent)
      },
      {
        path: 'compras/crear',
        loadComponent: () =>
          import('./presentation/pages/compras/compras-create/compras-create').then((m) => m.ComprasCreateComponent)
      },
      {
        path: 'compras/:id',
        loadComponent: () =>
          import('./presentation/pages/compras/compras-detail/compras-detail').then((m) => m.ComprasDetailComponent)
      },
      {
        path: 'compras/editar/:id',
        loadComponent: () =>
          import('./presentation/pages/compras/compras-edit/compras-edit').then((m) => m.ComprasEditComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
