import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  // templateUrl: './simple-layout.component.html',
  // styleUrls: ['./simple-layout.component.css']
  template: '<router-outlet></router-outlet>'
})
export class SimpleLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
