import { Component } from '@angular/core';
import { Shelter } from 'src/app/models/shelter/shelter';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _shelter:ShelterService){
    this._shelter.retrieveData();
  }

  get shelters(): Shelter[] | null{
    return this._shelter.getShelters();
  }

  positionMap = {
    street: 'Partida Caparrella',
    num: '98',
    city: 'Lleida',
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
