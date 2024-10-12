import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { AuthErrorResponse, TokenResponse, LoginForm } from '../../app.types';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router)

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    // username: new FormControl(null, Validators.required),
    // password: new FormControl(null, Validators.required),
  });

  // onSubmit() {
  //   if (this.form.valid) {
  //     //@ts-ignore
  //     this.authService.login(this.form.value).subscribe((res) => {
  //       console.log(res)
  //     })
  //   }
  // }

  onSubmit() {
    if (this.form.valid) {
      const formData: LoginForm = {
        username: this.form.value.username as string,
        password: this.form.value.password as string,
      };

      this.authService.login(formData).subscribe({
        next: (res: TokenResponse) => {
          console.log('Login success:', res);
          this.router.navigate([''])
        },
        error: (errorRes: AuthErrorResponse) => {
          console.log('Login failed:', errorRes);
        },
      });
    }
  }
}
