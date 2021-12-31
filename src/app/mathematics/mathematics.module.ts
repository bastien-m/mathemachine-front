import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MathematicsRoutingModule } from './mathematics-routing.module';
import { ComputationComponent } from './computation/computation.component';



@NgModule({
  declarations: [
    ComputationComponent
  ],
  imports: [
    CommonModule,
    MathematicsRoutingModule
  ]
})
export class MathematicsModule { }
