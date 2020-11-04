import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementacionmComponent } from './implementacionm/implementacionm.component';
import { ImplementacionRoutingModule } from './implementacionm-routing.module';


@NgModule({
  declarations: [ImplementacionmComponent],
  imports: [
    CommonModule,
    ImplementacionRoutingModule
  ]
})
export class ImplementacionmModule { }
