import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CifrasComponent } from '../cifras/cifras/cifras.component';
import { ComunicacionComunidadComponent } from './comunicacion-comunidad/comunicacion-comunidad.component';

const routes: Routes = [
  {
    path:'',
    component: ComunicacionComunidadComponent
  },
  {
      path:'ComunicacionC',
      component: ComunicacionComunidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicacionComunidadRoutingModule { }