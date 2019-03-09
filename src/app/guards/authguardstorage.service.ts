import { Injectable } from '@angular/core';
import { UserService } from '../services/index.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardStorageService implements CanActivate {

  constructor(private _userService: UserService,
              private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let token = this._userService.getToken();
      let user = this._userService.getUser();
      if(!token || !user){
        this.router.navigate(['/signin']);
        resolve(false);
      }
      resolve(true);
    });

  }

}
