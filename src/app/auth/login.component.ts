import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginResult } from './login-result';
import { LoginRequest } from './login-request';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-login',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterLink
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  loginResult!: LoginResult;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    var loginRequest = <LoginRequest>{
      userName: this.form.controls['userName'].value,
      password: this.form.controls['password'].value
    };
    this.authService.login(loginRequest).subscribe({
      next: result => {
        console.log(result);
        this.loginResult = result;
        if (result.success) {
          localStorage.setItem(this.authService.tokenKey, result.token);
          this.router.navigate(["/"]);
        }
      },
      error: error => {
        console.log(error);
        if (error.status == 401) {
          loginRequest = error.error;
        }
    }});
  }

}
