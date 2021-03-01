import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaundryDetailcReadComponent } from 'src/app/page/cashier/laundry-detailc/laundry-detailc-read/laundry-detailc-read.component';

const routes: Routes = [
  {
    path: 'detail-laundry',
    component: LaundryDetailcReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryDetailcRoutingModule { }
