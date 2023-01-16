import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { Country } from './model/territory';
import { TerritorystreetService } from './services/territorystreet.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:
  `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <footer class="footer">
  <div class="container content has-text-centered">
  <p>Made with  by Yacine Paul and Kahina</p>
  </div>
  </footer>`

})

// Implémenter OnInit
export class AppComponent implements OnInit {

constructor(private TerritoryStreetService : TerritorystreetService){}
title ='api-aircheckr';
coordonnees !: any
statistics !: any
qualityAir !: any
ListCityNameFrance !: any

// Fonction d'initialisation du composant.
ngOnInit() {



  this.fetchCityInFrance();


  if (navigator.geolocation){
      let coordonnees=[200,200];// j'initialise un tableau à deux cases pour stocker la latitude et la longitude avec des valeurs abberantes
      navigator.geolocation.getCurrentPosition (position => {
      coordonnees[0]=position.coords.latitude;
      coordonnees[1]=position.coords.longitude;
      console.log("c'est censé s'exécuter en premier "+coordonnees);
      const lacarte = L.map('carte').setView([coordonnees[0],coordonnees[1]], 12);// j'utilise les valeurs du tableau pour demander à afficher la carte en étant centré sur l'utilisateur

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'carte'
      }).addTo(lacarte);
      const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      L.marker([coordonnees[0],coordonnees[1]], {icon: myIcon}).bindPopup('vous êtes ici').addTo(lacarte).openPopup();// une icone qui pointe la position de l'utilisateur sur la carte
      console.log("c'est censé s'exécuter en 2e "+coordonnees);// j'affiche le tableau une deuxième fois
  // j'affiche le tableau pour être sur que les données sont bien récupérées
    });//avec tout ça je récupère les données que je veux (latitude sur la case 0 du tableau et longitude à la case 1)

}


}



  private fetchCityInFrance(){
    this.TerritoryStreetService.getNameCityInFrance().subscribe(data =>
      {this.ListCityNameFrance = data
      console.log('City in France Fetched',this.ListCityNameFrance)})
  }



}
