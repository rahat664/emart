import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordVisible: boolean;

  constructor(private auth: AuthService, private router: Router) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe({
        next: (res) => {
          if (res.message == 'Login successful') {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/'])
            alert('Logged In Successful');
          }
        }
      })
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onClickRegister() {
    this.router.navigate(['/register'])
  }
}
