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

  constructor(private router: Router) { 

  }

  ngDoCheck(): void {
    let url = this.router.url;

    if (url == '/login' || url == '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
  }
}
