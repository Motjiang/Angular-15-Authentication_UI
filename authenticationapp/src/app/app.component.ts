import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  
  title = 'authenticationapp';
  ismenurequired = false;
  username: string | null = '';

  constructor(private router: Router) { }

  ngDoCheck(): void {
    // Check if menu should be displayed based on route
    const url = this.router.url;
    this.ismenurequired = !(url === '/login' || url === '/register');

    // Fetch username from localStorage to display current logged-in user
    this.username = sessionStorage.getItem('username');
  }
}
