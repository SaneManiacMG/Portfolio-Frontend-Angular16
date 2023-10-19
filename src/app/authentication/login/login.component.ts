import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false),
  });

  forgotPassword(): void {
    console.log('load up forgot password modal');
  }

  loginUser(): void {
    console.log('Login form submitted');
    console.log(this.loginForm.value);
  }
}
