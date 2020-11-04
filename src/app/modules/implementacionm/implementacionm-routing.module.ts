import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplementacionmComponent } from './implementacionm/implementacionm.component';

const routes: Routes = [
  {
    path:'',
    component: ImplementacionmComponent
  },
  {
    
    path:'Implementacion',
    component: ImplementacionmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImplementacionRoutingModule { }
