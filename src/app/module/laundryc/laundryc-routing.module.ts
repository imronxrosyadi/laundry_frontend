import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaundrycCreateComponent } from 'src/app/page/cashier/laundryc/laundryc-create/laundryc-create.component';
import { LaundrycReadComponent } from 'src/app/page/cashier/laundryc/laundryc-read/laundryc-read.component';


const routes: Routes = [
  {
    path: 'list-laundry',
    component: LaundrycReadComponent
  },
  {
    path: 'modify-laundry',
    component: LaundrycCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundrycRoutingModule { }
