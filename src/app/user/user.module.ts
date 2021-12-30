import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, UserRoutingModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule ],
})
export class UserModule {}
