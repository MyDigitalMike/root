import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgradecimientosaComponent } from './agradecimientosa/agradecimientosa.component';
import { AgradecimientosRoutingModule } from './agradecimientosa-routing.module';


@NgModule({
  declarations: [AgradecimientosaComponent],
  imports: [
    CommonModule, 
    AgradecimientosRoutingModule
  ]
})
export class AgradecimientosaModule { }
