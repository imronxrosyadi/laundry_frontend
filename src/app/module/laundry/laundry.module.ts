import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaundryRoutingModule } from './laundry-routing.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { LaundryComponent } from 'src/app/page/admin/laundry/laundry.component';


@NgModule({
  declarations: [
    LaundryComponent
  ],
  imports: [
    CommonModule,
    LaundryRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule
  ]
})
export class LaundryModule { }
