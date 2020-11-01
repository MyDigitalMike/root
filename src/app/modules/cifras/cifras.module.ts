import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CifrasComponent } from './cifras/cifras.component';
import { CifrasRoutingModule } from './cifras-routing.module';



@NgModule({
  declarations: [CifrasComponent],
  imports: [
    CommonModule,
    CifrasRoutingModule
  ]
})
export class CifrasModule { }
