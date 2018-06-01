import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'body',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
