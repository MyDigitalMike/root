import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaTComponent } from './linea-t/linea-t.component';

const routes: Routes = [
  {
    path:'',
    component: LineaTComponent
  },
  {
    
    path:'Liena',
    component: LineaTComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineaTRoutingModule { }
