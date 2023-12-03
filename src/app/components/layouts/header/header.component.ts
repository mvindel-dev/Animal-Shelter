import { Component } from '@angular/core';
import { Shelter } from 'src/app/models/shelter/shelter';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //shelters:Array<Shelter> = [];

  constructor(private _shelter:ShelterService){
    this._shelter.retrieveData();
  }

  get shelters(): Shelter[] | null{
    return this._shelter.getShelters();
  }
  
  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.dispatchEvent(new Event('click'));
    }
  }
  
}


