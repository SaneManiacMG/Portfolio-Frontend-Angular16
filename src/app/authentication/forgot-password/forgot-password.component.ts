// forgot-password.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {
    // TODO: Implement forgot password logic
    console.log(`Forgot password form submitted with email: ${this.email}`);
  }
}
