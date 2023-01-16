import { Component, OnInit } from '@angular/core';
import { TerritorystreetService } from '../services/territorystreet.service';

@Component({
  selector: 'app-home',
  template:
  `
  <div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" name="search" [(ngModel)]="listcountry.id" type="text" placeholder="Search by country">

  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div>
  <table class="table is-striped" style="width:100%">
  <thead>
  <th>ID of Country</th>
  <th>Name of Country</th>
  </thead>
  <tbody>
  <tr *ngFor="let item of listcountry | filter:listcountry.id | filter:listcountry.name">
  <td>{{ item.id }}</td>
  <td> {{ item.name }} </td>
  </tr>
  </tbody>
  </table>
  `,
  styleUrls: ['./home.component.css']



})

export class HomeComponent implements OnInit {

  listcountry : any

  constructor(private homeService: TerritorystreetService) { }

  ngOnInit(): void {
    this.fetchTerritory();
  }
  private fetchTerritory(){
    this.homeService.getCountry().subscribe(data=>
      {this.listcountry = data
      console.log('Territory fetched', this.listcountry)})

    }

}
