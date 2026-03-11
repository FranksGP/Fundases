import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/pages/login/login';
import { authGuard } from './application/guards/auth.guard';
import { MainLayoutComponent } from './presentation/layouts/main-layout/main-layout';

export const routes: Routes = [

{
path:'login',
component:LoginComponent
},

{
path:'',
component:MainLayoutComponent,
canActivate:[authGuard],
children:[

{
path:'dashboard',
loadComponent:()=>
import('./presentation/pages/dashboard/dashboard')
.then(m=>m.DashboardComponent)
}

]
},

{
path:'',
redirectTo:'login',
pathMatch:'full'
}

];