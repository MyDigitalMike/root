import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrgablesgComponent } from './entrgablesg/entrgablesg.component';

const routes: Routes = [
  {
    path:'',
    component: EntrgablesgComponent
  },
  {
    
    path:'Entregables',
    component: EntrgablesgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregablesRoutingModule { }
