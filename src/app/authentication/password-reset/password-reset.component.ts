import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent {
  constructor() {}

  resetPasswordForm = new FormGroup({
    email: new FormControl(''),
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmNewPassword: new FormControl(''),
  });

  resetPassword(): void {
    console.log('Reset password form submitted');
    console.log(this.resetPasswordForm.value);
  }
}
