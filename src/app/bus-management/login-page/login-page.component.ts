import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/AuthService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  error: boolean = false;
  loginForm!: FormGroup;
  constructor(private authService: AuthServiceService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], // Set validators if needed
      password: ['', Validators.required] // Set validators if needed
    });
  }
  onSubmit(): void {
    if (this.authService.authenticate( this.loginForm.value.username,  this.loginForm.value.password)) {
      // Authentication successful, redirect or perform desired action
      alert('Authentication successful')
      console.log('Authentication successful');
      // Example: Redirect to dashboard
      // this.router.navigate(['/dashboard']);
    } else {
      // Authentication failed, display error message
      this.error = true;
    }
  }
}
