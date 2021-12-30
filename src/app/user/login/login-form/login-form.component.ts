import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output("submitLogin") submitLogin = new EventEmitter<FormGroup>();

  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  submit() {
    if (this.loginForm.valid) {
      this.submitLogin.emit(this.loginForm)
    }
  }

  get login(): FormControl { 
    return this.loginForm.get('login') as FormControl
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl
  }

}
