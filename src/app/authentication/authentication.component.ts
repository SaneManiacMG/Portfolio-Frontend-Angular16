import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  activeTab: string = 'login';

  switchToTab(tabName: string) {
    console.log('Switching to tab: ' + tabName);
    this.activeTab = tabName;
  }

  LoginComponent = LoginComponent;
  RegistrationComponent = RegistrationComponent;
}
