import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleCreateComponent } from 'src/app/page/admin/role/role-create/role-create.component';
import { RoleReadComponent } from 'src/app/page/admin/role/role-read/role-read.component';


const routes: Routes = [
  {
    path: 'list-roles',
    component: RoleReadComponent
  },
  {
    path: 'modif-role',
    component: RoleCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
