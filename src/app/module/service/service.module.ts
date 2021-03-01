import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ServiceReadComponent } from 'src/app/page/admin/service/service-read/service-read.component';
import { ServiceCreateComponent } from 'src/app/page/admin/service/service-create/service-create.component';


@NgModule({
  declarations: [
    ServiceReadComponent,
    ServiceCreateComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class ServiceModule { }
