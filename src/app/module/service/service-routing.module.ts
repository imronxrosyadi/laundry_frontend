import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCreateComponent } from 'src/app/page/admin/service/service-create/service-create.component';
import { ServiceReadComponent } from 'src/app/page/admin/service/service-read/service-read.component';


const routes: Routes = [
  {
    path: 'list-services',
    component: ServiceReadComponent
  },
  {
    path: 'modif-service',
    component: ServiceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
