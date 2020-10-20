import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo/equipo.component';
import {NuestroEquipoRoutingModule} from './nuestroequipo-routing.module'


@NgModule({
  declarations: [
    EquipoComponent
  ],
  imports: [
    CommonModule,
    NuestroEquipoRoutingModule
  ]
})
export class NuestroEquipoModule { }