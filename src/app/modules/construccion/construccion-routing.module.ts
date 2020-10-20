import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstruccionComponent } from './construccion/construccion.component';

const routes: Routes = [
  {
    path:'',
    component: ConstruccionComponent
  },
  {
    path:'EnConstruccion',
    component: ConstruccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstruccionRoutingModule { }