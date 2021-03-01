import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomercRoutingModule } from './customerc-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import { CustomercReadComponent } from 'src/app/page/cashier/customerc/customerc-read/customerc-read.component';
import { CustomercCreateComponent } from 'src/app/page/cashier/customerc/customerc-create/customerc-create.component';

@NgModule({
  declarations: [
    CustomercReadComponent,
    CustomercCreateComponent
  ],
  imports: [
    CommonModule,
    CustomercRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class CustomercModule { }
