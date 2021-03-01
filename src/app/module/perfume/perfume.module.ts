import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfumeRoutingModule } from './perfume-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { PerfumeCreateComponent } from 'src/app/page/admin/perfume/perfume-create/perfume-create.component';
import { PerfumeReadComponent } from 'src/app/page/admin/perfume/perfume-read/perfume-read.component';


@NgModule({
  declarations: [
    PerfumeReadComponent,
    PerfumeCreateComponent
  ],
  imports: [
    CommonModule,
    PerfumeRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class PerfumeModule { }
