import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';
import { DashboardcComponent } from '../../layout/dashboardc/dashboardc.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { AdminModule } from '../admin/admin.module';
import { CashierModule } from '../cashier/cashier.module';


@NgModule({
  declarations: [
    // DashboardComponent,
    // DashboardcComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    ButtonModule,
    // AdminModule,
    // CashierModule
  ]
})
export class DashboardModule { }
