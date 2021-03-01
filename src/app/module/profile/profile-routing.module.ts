import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCreateComponent } from 'src/app/page/admin/profile/profile-create/profile-create.component';
import { ProfileReadComponent } from 'src/app/page/admin/profile/profile-read/profile-read.component';


const routes: Routes = [
  {
    path: 'list-profiles',
    component: ProfileReadComponent
  },
  {
    path: 'modif-profile',
    component: ProfileCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
