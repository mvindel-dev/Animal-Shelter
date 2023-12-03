import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal';
import { AnimalsService } from 'src/app/services/animals.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  public dogs: Animal[] | null = null;

  constructor(private _animals: AnimalsService, private _petService: PetService) {}

  ngOnInit(): void {
    this._animals.retrieveData();
    this._animals.dataLoaded$().subscribe(() => {
      this.getDogs();
    });
  }

  getDogs(): void {
    this.dogs = this._animals.getDogs();
  }

  selectDog(dog: Animal): void {
    this._petService.selectPet(dog);
  }
  
}
