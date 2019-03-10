import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { User, Animal} from '../model/index.model';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  private TOKEN_PREFIX:string = 'Bearer ';

  constructor( private _http:Http ) {

  }

  public joinUserToFamily(token:string, user_id:number, family_token:string){
    let url = GLOBAL.URL + GLOBAL.URL_SERVICE_USER + '/joinfamily?user_id=' + user_id + '&family_token=' + family_token;
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.put(url, null, requestOptions)
                .pipe(map(res => res));
  }

  public joinAnimalToFamily(token:string, family_id:number, animal_id:number){
    let url = GLOBAL.URL + GLOBAL.URL_SERVICE_ANIMAL + '/joinfamily?family_id=' + family_id + '&animal_id=' + animal_id;
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.put(url, null, requestOptions)
                .pipe(map(res => res));
  }

  public sendVerificationEmail(user:User){
    let url = GLOBAL.URL + GLOBAL.URL_EMAIL_VERIFICATION;
    let toReceiver = {
      'name': user.name,
      'email': user.email
    }
    let params = JSON.stringify(toReceiver);
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.post(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public activateUser(user_id:number){
    let url = GLOBAL.URL + GLOBAL.URL_SERVICE_USER + '/activate/' + user_id;
    let headers = new Headers({
      'Content-type':'application/json'
    })
    let requestOptions = new RequestOptions({headers:headers});
    return this._http.put(url, null, requestOptions)
                .pipe(map(res => res));
  }

  public uploadImage(token:string, image){
    let url = GLOBAL.URL + '/services/upload/image';
    let formData = new FormData();
    formData.append('image', image);
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({headers:headers});
    return this._http.post(url, formData, requestOptions )
                .pipe(map(res => res));
  }

  public getImage(token:string, image:string){
    let url = GLOBAL.URL + '/services/download/image' + '?filename=' + image;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.get(url, requestOptions)
                .pipe(map(res => res));
  }
  
}
