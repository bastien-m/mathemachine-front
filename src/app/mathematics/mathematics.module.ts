import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComputationComponent } from './computation/computation.component';
import { MathematicsRoutingModule } from './mathematics-routing.module';



@NgModule({
  declarations: [
    ComputationComponent
  ],
  imports: [
    CommonModule,
    MathematicsRoutingModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class MathematicsModule { }
