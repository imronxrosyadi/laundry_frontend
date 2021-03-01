import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentCreateComponent } from 'src/app/page/admin/payment/payment-create/payment-create.component';
import { PaymentReadComponent } from 'src/app/page/admin/payment/payment-read/payment-read.component';


const routes: Routes = [
  {
    path: 'list-payments',
    component: PaymentReadComponent
  },
  {
    path: 'modif-payment',
    component: PaymentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
