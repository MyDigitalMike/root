import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrmasmComponent } from './progrmasm/progrmasm.component';

const routes: Routes = [
  {
    path:'',
    component: ProgrmasmComponent
  },
  {
    
    path:'Programas',
    component: ProgrmasmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
