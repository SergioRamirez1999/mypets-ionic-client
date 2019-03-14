import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _http:HttpClient ) {

  }

  getFoodOpts(){
    return this._http.get('/assets/resources/food.json');
  }

  getMedicineOpts(){
    return this._http.get('/assets/resources/inventory-medicine.json');
  }

  public getInventoryMedicineOpts(){
    return this._http.get('/assets/resources/inventory-medicine.json');
  }

  public getInventoryFoodOpts(){
    return this._http.get('/assets/resources/inventory-food.json');
  }
}
