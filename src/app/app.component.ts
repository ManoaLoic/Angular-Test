import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatDividerModule,
            MatIconModule, MatSlideToggleModule,
            AssignmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application de gestion des assignments';

  constructor(private authService:AuthService,
              private router:Router) {
  }

  get isConnected() :boolean{
    return this.authService.loggedIn();
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  login() {
      this.router.navigate(['/login']);
  }
}
