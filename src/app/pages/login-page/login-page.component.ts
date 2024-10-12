import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { AuthErrorResponse, AuthSuccessResponse, LoginForm } from "../../app.types";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);

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
        password: this.form.value.password as string
      }

      this.authService.login(formData).subscribe({
        next: (res: AuthSuccessResponse) => {
          console.log("Login success:", res)
        },
        error: (errorRes: AuthErrorResponse) => {
          console.log("Login failed:", errorRes)
        }
      })
    }
  }
}
