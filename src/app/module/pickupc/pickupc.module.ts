import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickupcRoutingModule } from './pickupc-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { PickupcReadComponent } from 'src/app/page/cashier/pickupc/pickupc-read/pickupc-read.component';
import { PickupcCreateComponent } from 'src/app/page/cashier/pickupc/pickupc-create/pickupc-create.component';


@NgModule({
  declarations: [
    PickupcReadComponent,
    PickupcCreateComponent
  ],
  imports: [
    CommonModule,
    PickupcRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DropdownModule
  ]
})
export class PickupcModule { }
