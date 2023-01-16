import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoordscarteService } from '../coordscarte.service';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-body',
  template: `<body>
  <script async type="text/javascript" src="../js/bulma.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/js/OverlayScrollbars.min.js'></script>
  <script>
  document.addEventListener("DOMContentLoaded", function() {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll("body"), { });
  });
  </script>`,
  
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  dataservice: CoordscarteService;
  coordform: UntypedFormGroup;
  controllatitude=new FormControl<number>(0, { nonNullable: true });
  controllong=new FormControl<number>(0, { nonNullable: true });

  name = 'Angular ' + VERSION.major;

  constructor(dataservice: CoordscarteService) {
    this.dataservice=dataservice;
    this.coordform = new UntypedFormGroup ({
      controllatitude: this.controllatitude,
      controllong: this.controllong,
    })
   }
  abonnement: Subscription = new Subscription;


  /*fonctionville(): void{
    console.log("nomville= "+this.nomville.value);


  }*/

  //(click)="fonctionville()"

  fonctioncoord(): void{
    console.log("latitude= "+ this.controllatitude.value);
    console.log("longitude= "+this.controllong.value);
    this.dataservice.raffichage(this.controllatitude.value,this.controllong.value);

  }

  submitForm(): boolean {
    //console.log("nomville= "+nomville);
    return false;
  }

  submitform2(): boolean{
    return false;
  }


  ngOnInit(): void {
  }

}
