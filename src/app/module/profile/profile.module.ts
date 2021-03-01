import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { ProfileReadComponent } from 'src/app/page/admin/profile/profile-read/profile-read.component';
import { ProfileCreateComponent } from 'src/app/page/admin/profile/profile-create/profile-create.component';


@NgModule({
  declarations: [
    ProfileReadComponent,
    ProfileCreateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ]
})
export class ProfileModule { }
