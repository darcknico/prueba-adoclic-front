import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  loginForm!: FormGroup;
  isLoading = false;

  isLoginError = false;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.form();
  }

  form() {
    const fb = new FormBuilder();
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  async login() {
    const { email, password } = this.loginForm.value;
    this.isLoginError = false;
    this.isLoading = true;
    this.authService.login(email, password).then((res) => {
      if(res === true) {
        this.router.navigate(['/shopping']);
      } else {
        this.isLoginError = true;
      }
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

}
