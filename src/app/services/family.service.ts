import { Injectable } from '@angular/core';
import { FamilyGroup } from '../model/index.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private TOKEN_PREFIX:string = 'Bearer ';

  constructor(private _http: Http) {

  }

  public getFamilyGroupById(token:string, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_FAMILY + '/' + id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.get(url, requestOptions)
                .pipe(map(res => res));
  }

  public getFamilyGroupPagination(token:string, page:number = 0){
    let url = GLOBAL.URL + GLOBAL.URL_FAMILY + '?page=' + page;
    let headers = new Headers({
      "Authorization":this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers:headers });
    return this._http.get(url, requestOptions)
              .pipe(map(res => res));
  }

  public saveFamilyGroup(token:string, family:FamilyGroup){
    let url = GLOBAL.URL + GLOBAL.URL_FAMILY;
    let params = JSON.stringify(family);
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.post(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public updateFamilyGroup(token:string, family:FamilyGroup, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_FAMILY + '/' + id;
    let params = JSON.stringify(family);
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.put(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public removeFamilyGroup(token:string, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_FAMILY + '/' + id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.delete(url, requestOptions)
                .pipe(map(res => res));
  }
}
