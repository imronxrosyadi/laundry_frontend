import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './page/login/login.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { AdminModule } from './module/admin/admin.module';
import { CashierModule } from './module/cashier/cashier.module';
import { Page404Component } from './page/page404/page404.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { DashboardcComponent } from './layout/dashboardc/dashboardc.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    DashboardComponent,
    DashboardcComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    // DashboardModule,
    // AdminModule,
    // CashierModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
