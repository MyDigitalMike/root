import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanroqueComponent } from './sanroque/sanroque.component';

const routes: Routes = [
  {
    path:'',
    component: SanroqueComponent
  },
  {
      path:'Inicio',
      component: SanroqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule { }
