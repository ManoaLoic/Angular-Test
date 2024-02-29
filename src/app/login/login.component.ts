import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = 'test@gmail.com';
  password = 'test1234';
  error = '';

  constructor(
    private authService:AuthService,
    private route: Router
  ) {}

  doLogin(event: any) {
    if(!this.email || !this.password) return;

    if(this.authService.logIn(this.email, this.password)){
      this.route.navigate(['/home']);
    }else{
      this.error = 'Please check email and password';
    }

  }

}
