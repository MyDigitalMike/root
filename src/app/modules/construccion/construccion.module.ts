import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstruccionComponent } from './construccion/construccion.component';
import {ConstruccionRoutingModule} from './construccion-routing.module'



@NgModule({
  declarations: [
    ConstruccionComponent
  ],
  imports: [
    CommonModule,
    ConstruccionRoutingModule
  ]
})
export class ConstruccionModule { }
