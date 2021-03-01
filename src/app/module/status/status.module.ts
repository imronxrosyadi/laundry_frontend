import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import { StatusReadComponent } from 'src/app/page/admin/status/status-read/status-read.component';
import { StatusCreateComponent } from 'src/app/page/admin/status/status-create/status-create.component';


@NgModule({
  declarations: [
    StatusReadComponent,
    StatusCreateComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class StatusModule { }
