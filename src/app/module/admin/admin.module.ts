import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from 'src/app/page/admin/admin.component';
import { CustomerModule } from '../customer/customer.module';
import { PaymentModule } from '../payment/payment.module';
import { PerfumeModule } from '../perfume/perfume.module';
import { ServiceModule } from '../service/service.module';
import { StatusModule } from '../status/status.module';
import { ProfileModule } from '../profile/profile.module';
import { RoleModule } from '../role/role.module';
import { UserModule } from '../user/user.module';
import { LaundryModule } from '../laundry/laundry.module';
import { LaundryDetailModule } from '../laundry-detail/laundry-detail.module';
import { PickupModule } from '../pickup/pickup.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomerModule,
    PaymentModule,
    PerfumeModule,
    ServiceModule,
    StatusModule,
    ProfileModule,
    RoleModule,
    UserModule,
    LaundryModule,
    PickupModule,
    LaundryDetailModule
  ]
})
export class AdminModule { }
