import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickupRoutingModule } from './pickup-routing.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';

import { PickupComponent } from 'src/app/page/admin/pickup/pickup.component';


@NgModule({
  declarations: [
    PickupComponent
  ],
  imports: [
    CommonModule,
    PickupRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule,
  ]
})
export class PickupModule { }
