import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CifrasComponent } from './cifras/cifras.component';

const routes: Routes = [
  {
    path:'',
    component: CifrasComponent
  },
  {
      path:'SanRoqueCifras',
      component: CifrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CifrasRoutingModule { }