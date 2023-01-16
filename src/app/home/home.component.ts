import { Component, OnInit } from '@angular/core';
import { TerritorystreetService } from '../services/territorystreet.service';

@Component({
  selector: 'app-home',
  template:
  `<table class="table is-striped" style="width:100%">
  <thead>
  <th>ID of Country</th>
  <th>Name of Country</th>
  </thead>
  <tbody>
  <tr *ngFor="let item of listcountry">
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
