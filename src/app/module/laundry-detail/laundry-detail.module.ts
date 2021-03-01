import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';

import { LaundryDetailRoutingModule } from './laundry-detail-routing.module';
import { LaundryDetailComponent } from 'src/app/page/admin/laundry-detail/laundry-detail.component';


@NgModule({
  declarations: [
    LaundryDetailComponent
  ],
  imports: [
    CommonModule,
    LaundryDetailRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule
  ]
})
export class LaundryDetailModule { }
