import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Animal } from '../models/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private _animals: Animal[] | null = null;
  private _cats: Animal[] | null = null;
  private _dogs: Animal[] | null = null;
  private _dataLoadedSubject = new Subject<void>();

  constructor(private _http: HttpClient) {}

  retrieveData(): void {
    this._http.get('../assets/data/pets_data.json').subscribe({
      next: (data: any) => {
        this._animals = data?.pets || [];
        this._cats = this._animals?.filter(animal => animal.type === 'Cat') || [];
        this._dogs = this._animals?.filter(animal => animal.type === 'Dog') || [];
        this._dataLoadedSubject.next();
      },
      error: (msg: string) => {
        console.error("Error " + msg);
      }
    });
  }

  getAnimals(): Animal[] | null {
    return this._animals;
  }

  getCats(): Animal[] | null {
    return this._cats;
  }

  getDogs(): Animal[] | null {
    return this._dogs;
  }

  getAnimalByName(name: string): Animal | null {
    const lowercaseName = name.toLowerCase();
    return this._animals?.find(animal => animal.name.toLowerCase() === lowercaseName) || null;
  }

  dataLoaded$(): Observable<void> {
    return this._dataLoadedSubject.asObservable();
  }
}
