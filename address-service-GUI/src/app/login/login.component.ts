// login.component.ts
import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import * as tslib from 'tslib';
import {error} from "@angular/compiler-cli/src/transformers/util";
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

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(): void {
    const apiUrl = 'http://localhost:8080/addresses-service/user';
    this.http.post(apiUrl, this.user).subscribe(
      (response: Object) => {
        const userResponse = response as { id: null; firstName: string; lastName: string };
        console.log('User logged in', userResponse);
        this.router.navigate(['/address', userResponse.id]);
      },
      error => {
        console.error('Login failed', error);
        // Handle login error here
      }
    );
  }
}
