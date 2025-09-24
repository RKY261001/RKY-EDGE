import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor() {}

  onLogin() {
    // Ye API call tum apne ApiService se karoge
    console.log('Login clicked', this.username, this.password);
  }
}
