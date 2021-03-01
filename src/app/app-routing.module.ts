import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardcComponent } from './layout/dashboardc/dashboardc.component';
import { Page404Component } from './page/page404/page404.component';

const routes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    redirectTo : '/login', pathMatch: 'full'
  },
  {
    path: 'admin',
    component : DashboardComponent,
    loadChildren : ()=> import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'cashier',
    component : DashboardcComponent,
    loadChildren : ()=> import('./module/cashier/cashier.module').then(m => m.CashierModule)
  },
  {
    path : '**',
    component : Page404Component
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
