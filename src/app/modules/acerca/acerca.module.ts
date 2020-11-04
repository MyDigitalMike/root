import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaComponent } from './acerca/acerca.component';
import { AcercaRoutingModule } from './acerca-routing.module';


@NgModule({
  declarations: [AcercaComponent],
  imports: [
    CommonModule,
    AcercaRoutingModule
  ]
})
export class AcercaModule { }
