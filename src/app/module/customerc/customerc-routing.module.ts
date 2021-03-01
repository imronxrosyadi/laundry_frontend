import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomercCreateComponent } from 'src/app/page/cashier/customerc/customerc-create/customerc-create.component';
import { CustomercReadComponent } from 'src/app/page/cashier/customerc/customerc-read/customerc-read.component';

const routes: Routes = [
  {
    path: 'list-customer',
    component: CustomercReadComponent
  },
  {
    path: 'modify-customer',
    component: CustomercCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomercRoutingModule { }
