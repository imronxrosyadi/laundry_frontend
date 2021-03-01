import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaundryDetailComponent } from 'src/app/page/admin/laundry-detail/laundry-detail.component';

const routes: Routes = [
  {
    path : 'laundry-detail',
    component: LaundryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryDetailRoutingModule { }
