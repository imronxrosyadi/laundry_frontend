import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickupcCreateComponent } from 'src/app/page/cashier/pickupc/pickupc-create/pickupc-create.component';
import { PickupcReadComponent } from 'src/app/page/cashier/pickupc/pickupc-read/pickupc-read.component';


const routes: Routes = [
  {
    path : 'list-pickup',
    component : PickupcReadComponent
  },
  {
    path : 'modify-pickup',
    component : PickupcCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickupcRoutingModule { }
