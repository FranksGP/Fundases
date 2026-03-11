import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/pages/login/login';
import { authGuard } from './application/guards/auth.guard';

export const routes: Routes = [

{
  path: "login",
  component: LoginComponent
},


{
  path: "dashboard",
  loadComponent: () =>
    import('./presentation/pages/dashboard/dashboard')
      .then(m => m.DashboardComponent),
  canActivate: [authGuard]
},

{
  path: "",
  redirectTo: "login",
  pathMatch: "full"
}

];