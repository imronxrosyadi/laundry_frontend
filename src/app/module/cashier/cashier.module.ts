import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CustomercModule } from '../customerc/customerc.module';
import { LaundrycModule } from '../laundryc/laundryc.module';
import { PickupcModule } from '../pickupc/pickupc.module';
import { LaundryDetailcModule } from '../laundry-detailc/laundry-detailc.module';

import { CashierComponent } from 'src/app/page/cashier/cashier.component';


@NgModule({
  declarations: [
    CashierComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    
    CustomercModule,
    LaundrycModule,
    PickupcModule,
    LaundryDetailcModule
  ]
})
export class CashierModule { }
