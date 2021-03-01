import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaundryDetailcRoutingModule } from './laundry-detailc-routing.module';
// import { LaundryDetailcReadComponent } from '../../page/laundry-detailc/laundry-detailc-read/laundry-detailc-read.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { LaundryDetailcReadComponent } from 'src/app/page/cashier/laundry-detailc/laundry-detailc-read/laundry-detailc-read.component';

@NgModule({
  declarations: [
    LaundryDetailcReadComponent
  ],
  imports: [
    CommonModule,
    LaundryDetailcRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DropdownModule
  ]
})
export class LaundryDetailcModule { }
