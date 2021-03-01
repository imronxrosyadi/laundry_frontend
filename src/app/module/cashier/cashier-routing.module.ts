import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardcComponent } from 'src/app/layout/dashboardc/dashboardc.component';
import { CashierComponent } from 'src/app/page/cashier/cashier.component';

const routes: Routes = [
  {
    path: '',
    component: CashierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
