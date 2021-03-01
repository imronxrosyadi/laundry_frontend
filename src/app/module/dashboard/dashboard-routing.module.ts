import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardcComponent } from 'src/app/layout/dashboardc/dashboardc.component';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'dashboardc',
    component: DashboardcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
