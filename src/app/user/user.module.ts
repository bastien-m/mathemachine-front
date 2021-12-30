import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
