import { Component, OnInit } from '@angular/core';
import { TerritorystreetService } from '../services/territorystreet.service';

@Component({
  selector: 'app-air-leuven',
  template : `

  <table class="table is-striped" style="width:100%">
  <thead>
  <th>statistical_period</th>
  <th>Aerea Name</th>
  <th>no2</th>
  <th>o3</th>
  <th>pm10</th>
  <th>pm25</th>
  </thead>
  <tbody>
  <tr *ngFor="let item of dataAir.data">
  <td>{{ item.statistical_period }}</td>
  <td>Leuven</td>
  <td>{{ item.yearly_mean_values.no2}}</td>
  <td>{{ item.yearly_mean_values.o3}}</td>
  <td>{{ item.yearly_mean_values.pm10 }}</td>
  <td>{{ item.yearly_mean_values.pm25 }}</td>
  </tr>
  </tbody>
  </table>

  <article class="message is-warning">
  <div class="message-header" >
    <p>Poll info Source no2</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body"*ngFor="let item of dataAir.data">
  {{ item.poll_info.no2.source }}
  </div>
</article>

<table class="table is-striped" style="width:100%">
  <thead>
    <th>Date start</th>
    <th>Date End </th>
  <th>Aerea Name</th>
  <th>no2</th>
  <th>o3</th>
  <th>pm10</th>
  <th>pm25</th>
  </thead>
  <tbody>
  <tr *ngFor="let item of dataAirToulon.data">
  <td>{{ item.dataTime.start }}</td>
  <td> {{ item.dataTime.end}}</td>
  <td>Toulon</td>
  <td>{{ item.values.no2}}</td>
  <td>{{ item.values.o3}}</td>
  <td>{{ item.values.pm10}}</td>
  <td>{{ item.values.pm25 }}</td>
  </tr>
  </tbody>
  </table>


  <article class="message is-danger">
  <div class="message-header" >
    <p>Poll info Source o3</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body"*ngFor="let item of dataAirToulon.data">
  {{ item.poll_info.o3.source }}
  </div>
</article>

  `,
  styleUrls: ['./air-leuven.component.css']
})
export class AirLeuvenComponent implements OnInit {

  dataAir !: any;
  dataAirToulon !: any;

  constructor(private dataservice: TerritorystreetService) { }

  ngOnInit(): void {

    this.fetchStatisticLeuvent();
    this.fetchQualityAirToulon();

  }


  private fetchStatisticLeuvent(){
    this.dataservice.getStatisticLeuven().subscribe(data =>
      { this.dataAir = data
        console.log('statistics fecthed', this.dataAir)})
  }

  private fetchQualityAirToulon(){
    this.dataservice.getQualityAirToulon().subscribe(data =>
      {this.dataAirToulon = data
      console.log('AirQuality in Toulon', this.dataAirToulon)})
  }



}
