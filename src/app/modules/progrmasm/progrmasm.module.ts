import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrmasmComponent } from './progrmasm/progrmasm.component';
import { ProgramasRoutingModule} from './progrmas-routing.module'


@NgModule({
  declarations: [ProgrmasmComponent],
  imports: [
    CommonModule,
    ProgramasRoutingModule
  ]
})
export class ProgrmasmModule { }
