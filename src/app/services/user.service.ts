import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import { User } from '../model/index.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private TOKEN_PREFIX:string = 'Bearer ';


  constructor( private _http: Http ) {

  }

  public signup(user_to_register){
    let url = GLOBAL.URL.concat(GLOBAL.URL_USER);
    let params = JSON.stringify(user_to_register);
    let headers = new Headers({ 'Content-type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this._http.post(url, params, requestOptions )
            .pipe(map(res => res));
  }

  public signin(user){
    let url = GLOBAL.URL + GLOBAL.URL_SERVICE_USER + '/login';
    let params = JSON.stringify(user);
    let headers = new Headers({
      'Content-type':'application/json'
    });
    let requestOptions = new RequestOptions({ headers:headers });
    return this._http.post(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public getUserById(token:string, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_USER + '/' + id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.get(url, requestOptions)
                .pipe(map(res => res));
  }

  public getUserByEmail(email:string){
    let url = GLOBAL.URL + GLOBAL.URL_USER + '/getbyemail/' + email;
    return this._http.get(url)
                .pipe(map(res => res));
  }


  public getUsersPagination(token:string, page:number = 0){
    let url = GLOBAL.URL + GLOBAL.URL_USER + '?page=' + page;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers});
    return this._http.get(url, requestOptions)
            .pipe(map(res => res))
  }

  public getUsersByFamily(token:string, family_id:number){
    let url = GLOBAL.URL + GLOBAL.URL_USER + '/family?family_id=' + family_id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.get(url, requestOptions)
            .pipe(map(res => res));
  }

  public updateUser(token:string, user:User, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_USER + '/' + id;
    let params = JSON.stringify(user);
    let headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    })
    let requestOptions = new RequestOptions({ headers: headers });
    return this._http.put(url, params, requestOptions)
                .pipe(map(res => res));
  }

  public removeUser(token:string, id:number){
    let url = GLOBAL.URL + GLOBAL.URL_USER + '/' + id;
    let headers = new Headers({
      'Authorization' : this.TOKEN_PREFIX.concat(token)
    });
    let requestOptions = new RequestOptions({ headers:headers });
    return this._http.delete(url, requestOptions)
                .pipe(map(res => res));
  }

  public getToken(){
    let token = localStorage.getItem('token');
    if(token){
      return token;
    }
    return null;
  }

  public saveToken(token:string){
    localStorage.setItem('token', token);
  }

  public getUser(){
    let user:User = JSON.parse(localStorage.getItem('user'));
    if(user){
      return user;
    }
    return null;
  }

  public saveUser(user:User){
    localStorage.setItem('user', JSON.stringify(user));
  }

}
