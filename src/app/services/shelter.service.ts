import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shelter } from '../models/shelter/shelter';

@Injectable({
  providedIn: 'root'
})
export class ShelterService{

  private _shelters: Array<Shelter> | null = null;

  constructor(private _http: HttpClient) {}

  retrieveData(): void {
    let subscription = this._http.get('../assets/data/general_data.json').subscribe({
      next: (shelters: any) => {
        this._shelters = shelters;
      },
      complete: () => {
        subscription.unsubscribe();
      },
      error: (msg: string) => {
        console.log("Error " + msg);
        subscription.unsubscribe();
      }
    });
  }

  getShelters():Shelter[] | null{
    return this._shelters;
  }

}
