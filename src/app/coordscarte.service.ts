import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class CoordscarteService {

  constructor() { }


  raffichage(latitude1: any,longitude1: any){
    let coordonnees=[latitude1,longitude1];// j'initialise un tableau à deux cases pour stocker la latitude et la longitude avec des valeurs abberantes
        navigator.geolocation.getCurrentPosition (position => {
        //coordonnees[0]=position.coords.latitude;
        //coordonnees[1]=position.coords.longitude;
        //console.log("c'est censé s'exécuter en premier "+coordonnees);
        const lacarte = L.map('carte').setView([coordonnees[0],coordonnees[1]], 12);// j'utilise les valeurs du tableau pour demander à afficher la carte en étant centré sur l'utilisateur

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'carte'
        }).addTo(lacarte);
        const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
        });
        L.marker([coordonnees[0],coordonnees[1]], {icon: myIcon}).bindPopup('ici').addTo(lacarte).openPopup();// une icone qui pointe la position de l'utilisateur sur la carte
        //console.log("c'est censé s'exécuter en 2e "+coordonnees);// j'affiche le tableau une deuxième fois
    // j'affiche le tableau pour être sur que les données sont bien récupérées
      });//avec tout ça je récupère les données que je veux (latitude sur la case 0 du tableau et longitude à la case 1)
  }
}
