import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionComunidadComponent } from './comunicacion-comunidad/comunicacion-comunidad.component';
import { ComunicacionComunidadRoutingModule } from './comunicacion-comunindad-routing.module';


@NgModule({
  declarations: [ComunicacionComunidadComponent],
  imports: [
    CommonModule,
    ComunicacionComunidadRoutingModule
  ]
})
export class ComunicacionComunidadModule { }
