import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  template: `<div class="navbar is-dark">
  <div class="navbar-brand">
  <a class="navbar-item" href="https://www.aircheckr.com/api_docs/#/">
    <img src="assets/img/aircheckr.png" >
  </a>
  </div>

  <div class="navbar-menu">
  <div class="navbar-start">
    <a class="navbar-item" routerLink="/">Home</a>
    <a class="navbar-item" routerLink="/dataAir">Air data</a>
    <a class="navbar-item" routerLink="/about">About</a>

</div>
</div>
</div>`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
