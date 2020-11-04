import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrgablesgComponent } from './entrgablesg/entrgablesg.component';
import { EntregablesRoutingModule } from './entregablesg-routing.module';



@NgModule({
  declarations: [EntrgablesgComponent],
  imports: [
    CommonModule,
    EntregablesRoutingModule
  ]
})
export class EntregablesgModule { }
