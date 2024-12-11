import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router: Router,private toast: HotToastService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Login Data:', { username, password });
     this.authService.verifyUserLogin({ username, password }).subscribe({
      next: (response:any) => {
      // console.log('response',response);
      localStorage.setItem('authToken', response.accessToken);
      // console.log('User logged in successfully!');
      this.toast.success('You logged in successfully!!');
      this.router.navigate(['/home']);
      },
      error: (error) => {
        // console.error('Login failed:', error);
        this.toast.error('Invalid username or password');

      },
    });
   
    } else {
      console.log('Form is invalid');
    }
  }
}
