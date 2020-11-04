import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgradecimientosaComponent } from './agradecimientosa/agradecimientosa.component';

const routes: Routes = [
  {
    path:'',
    component: AgradecimientosaComponent
  },
  {
    
    path:'Agradecimientos',
    component: AgradecimientosaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgradecimientosRoutingModule { }
