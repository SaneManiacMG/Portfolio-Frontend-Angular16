import { Component } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent {
  showForgotPassword: boolean = false;

  toggleFOrgotPasswordOverlay() {
    this.showForgotPassword = !this.showForgotPassword;
  }
}
