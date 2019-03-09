import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardVerifyService implements CanActivate {

  constructor(private router: Router) { }

  canActivate():Promise<boolean>{
    return new Promise((resolve, reject) => {
      let code = localStorage.getItem('code_verify');
      if(!code){
        this.router.navigate(['/signin']);
        resolve(false);
      }
      resolve(true);
    });
  }
}
