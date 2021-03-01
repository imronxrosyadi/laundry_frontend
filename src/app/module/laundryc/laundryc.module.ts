import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaundrycRoutingModule } from './laundryc-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { LaundrycReadComponent } from 'src/app/page/cashier/laundryc/laundryc-read/laundryc-read.component';
import { LaundrycCreateComponent } from 'src/app/page/cashier/laundryc/laundryc-create/laundryc-create.component';


@NgModule({
  declarations: [
    LaundrycReadComponent,
    LaundrycCreateComponent
  ],
  imports: [
    CommonModule,
    LaundrycRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ]
})
export class LaundrycModule { }
