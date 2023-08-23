import {Component} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  passwordVisible: boolean;

  constructor(private auth: AuthService, private router: Router) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.adminLogin(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe({
        next: (res) => {
          if (res.message == 'Login successful') {
            localStorage.setItem('adminToken', res.token);
            this.router.navigate(['admin-dashboard'])
          }
        }
      })
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

}
