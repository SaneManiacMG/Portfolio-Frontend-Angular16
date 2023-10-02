import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
]

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AuthenticationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthenticationModule {}
