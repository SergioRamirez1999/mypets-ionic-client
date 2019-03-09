import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import { Animal } from '../model/index.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private TOKEN_PREFIX:string = 'Bearer ';

  constructor( private _http: Http ) {

  }

  public getAnimalById(token:string, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_ANIMAL + '/' + id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.get(url, requestOptions)
                .pipe(map(res => res));
  }

  public getAnimalsPagination(token:string, page:number = 0){
    let url = GLOBAL.URL + GLOBAL.URL_ANIMAL + '?page=' + page;
    let headers = new Headers({
      "Authorization":this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers:headers });
    return this._http.get(url, requestOptions)
              .pipe(map(res => res));
  }

  public getAnimalsByFamily(token:string, family_id:number){
    let url = GLOBAL.URL + GLOBAL.URL_ANIMAL + '/family?family_id=' + family_id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.get(url, requestOptions)
            .pipe(map(res => res));
  }

  public saveAnimal(token:string, animal:Animal){
    let url = GLOBAL.URL + GLOBAL.URL_ANIMAL;
    let params = JSON.stringify(animal);
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.post(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public updateAnimal(token:string, animal:Animal, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_ANIMAL + '/' + id;
    let params = JSON.stringify(animal);
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.put(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public removeAnimal(token:string, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_ANIMAL + '/' + id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.delete(url, requestOptions)
                .pipe(map(res => res));
  }


}
