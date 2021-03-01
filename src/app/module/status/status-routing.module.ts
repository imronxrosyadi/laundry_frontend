import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusCreateComponent } from 'src/app/page/admin/status/status-create/status-create.component';
import { StatusReadComponent } from 'src/app/page/admin/status/status-read/status-read.component';


const routes: Routes = [
  {
    path: 'list-statuses',
    component: StatusReadComponent
  },
  {
    path: 'modif-status',
    component: StatusCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
