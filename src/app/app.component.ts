import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {
    // Debug routing
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Current Route:', event.url);
      }
    });
  }
}