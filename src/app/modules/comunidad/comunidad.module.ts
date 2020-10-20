import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanroqueComponent } from './sanroque/sanroque.component';
import {ComunidadRoutingModule} from './communidad-routing.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    SanroqueComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule
  ]
})
export class InicioModule { }
