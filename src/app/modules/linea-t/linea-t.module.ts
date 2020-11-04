import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaTComponent } from './linea-t/linea-t.component';
import {LineaTRoutingModule } from './linea-t-routing.module'


@NgModule({
  declarations: [LineaTComponent],
  imports: [
    CommonModule,
    LineaTRoutingModule
  ]
})
export class LineaTModule { }
