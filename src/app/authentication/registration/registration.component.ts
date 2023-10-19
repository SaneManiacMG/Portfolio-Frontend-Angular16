import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationComponent } from '../authentication.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private authenticationComponent: AuthenticationComponent) {}

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    username: new FormControl(''),
  });

  loginUser(): void {
    console.log('load up login modal');
    this.authenticationComponent.switchToTab('login');
  }

  registerUser(): void {
    console.log('Register form submitted');
    console.log(this.registerForm.value);
  }
}
