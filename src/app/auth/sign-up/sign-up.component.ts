import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router, private auth: AuthService) {
  }

  registerForm: FormGroup
  passwordVisible = false;
  confirmPasswordVisible = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      if (this.registerForm.get('password').value == this.registerForm.get('confirmPassword').value) {
        this.auth.register(this.registerForm.get('name').value, this.registerForm.get('email').value, this.registerForm.get('password').value).subscribe({
          next: (res) => {
            alert("User Created Successfully")
          }
        })
      } else {
        this.registerForm.get('confirmPassword').setErrors({confirmError: "Confirm password doesn't Match"})
      }
    }
  }

  onCLickLogin() {
    this.router.navigate(['/login'])
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible
  }
}
