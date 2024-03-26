import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = new BehaviorSubject<boolean>(false);

  staticUser = {
    email: 'user@demo.com',
    password: '123456',
    token: 'user@demo.com:123456'
  }

  constructor(private router: Router) {
  }

  login(email: string, password: string) {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        if (email === this.staticUser.email && password === this.staticUser.password) {
          resolve(true);
          this.isLogged.next(true)
        } else {
          resolve(false);
          this.isLogged.next(false)
        }
      }, 500);
    });
  }


  logout(): void {
    this.isLogged.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isLogged.getValue();
  }

  getAuthToken(): string {
    return this.staticUser.token;
  }

}
