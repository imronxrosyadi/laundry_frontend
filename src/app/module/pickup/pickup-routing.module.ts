import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickupComponent } from 'src/app/page/admin/pickup/pickup.component';

const routes: Routes = [
  {
    path: 'list-pickups',
    component: PickupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickupRoutingModule { }
