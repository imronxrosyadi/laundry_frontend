import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import { RoleReadComponent } from 'src/app/page/admin/role/role-read/role-read.component';
import { RoleCreateComponent } from 'src/app/page/admin/role/role-create/role-create.component';


@NgModule({
  declarations: [
    RoleReadComponent,
    RoleCreateComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class RoleModule { }
