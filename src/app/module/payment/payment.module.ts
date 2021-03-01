import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { PaymentReadComponent } from 'src/app/page/admin/payment/payment-read/payment-read.component';
import { PaymentCreateComponent } from 'src/app/page/admin/payment/payment-create/payment-create.component';


@NgModule({
  declarations: [
    PaymentReadComponent,
    PaymentCreateComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class PaymentModule { }
