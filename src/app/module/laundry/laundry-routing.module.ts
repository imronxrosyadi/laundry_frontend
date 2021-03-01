import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaundryComponent } from 'src/app/page/admin/laundry/laundry.component';

const routes: Routes = [
  {
    path: 'list-laundries',
    component: LaundryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryRoutingModule { }
