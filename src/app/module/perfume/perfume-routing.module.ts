import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfumeCreateComponent } from 'src/app/page/admin/perfume/perfume-create/perfume-create.component';
import { PerfumeReadComponent } from 'src/app/page/admin/perfume/perfume-read/perfume-read.component';

const routes: Routes = [
  {
    path: 'list-perfumes',
    component: PerfumeReadComponent
  },
  {
    path: 'modif-perfume',
    component: PerfumeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeRoutingModule { }
