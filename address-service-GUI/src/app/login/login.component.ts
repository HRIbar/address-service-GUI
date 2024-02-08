// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as tslib from 'tslib';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    firstName: '',
    lastName: ''
  };

  constructor(private http: HttpClient) {}

  onLogin(): void {
    const apiUrl = '/addresses-service/user'; // Replace with your actual environment variable or base URL
    this.http.post(apiUrl, this.user).subscribe(
      response => {
        console.log('User logged in', response);
        // Handle successful login here
      },
      error => {
        console.error('Login failed', error);
        // Handle login error here
      }
    );
  }
}
