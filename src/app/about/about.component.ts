import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">About</h1>
      </div>
    </div>
  </section>`,
  styleUrls: ['./about.component.css']
})




export class AboutComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
  }


}
