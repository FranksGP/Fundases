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
path:'compras',
children:[

{
path:'',
loadComponent:()=>
import('./presentation/pages/compras/compras-list/compras-list')
.then(m=>m.ComprasListComponent)
},

{
path:'crear',
loadComponent:()=>
import('./presentation/pages/compras/compras-create/compras-create')
.then(m=>m.ComprasCreateComponent)
},

{
path:':id',
loadComponent:()=>
import('./presentation/pages/compras/compras-detail/compras-detail')
.then(m=>m.ComprasDetailComponent)
},

{
path:'editar/:id',
loadComponent:()=>
import('./presentation/pages/compras/compras-edit/compras-edit')
.then(m=>m.ComprasEditComponent)
}

]
},

{
path:'',
redirectTo:'login',
pathMatch:'full'
}

];