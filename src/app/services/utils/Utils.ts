import { Injectable } from '@angular/core';
import { User } from '../../model/index.model';
import { ToastController, LoadingController } from '@ionic/angular';
import { ManagementService } from '../management.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor(private toastCtrl: ToastController,
              private _managementService: ManagementService,
              private _userService: UserService,
              private loadingCtrl: LoadingController,
              private router: Router){

  }

  public format_user(user_to_format:any){
    let user = new User(null, null, null, null, null, null);
    if(user_to_format){
      user.id = user_to_format.id;
      user.name = user_to_format.name;
      user.lastName = user_to_format.lastName;
      user.email = user_to_format.email;
      user.familyGroup = user_to_format.familyGroup;
      user.authorities = user_to_format.authorities;
    }
    return user;
  }

  public async showToast(message:string, color:string){
    const toast = await this.toastCtrl.create({
      message: message,
      color: color,
      position: 'bottom',
      duration: 1900
    });
    await toast.present();
  }

  public async sendVerificationEmail(user){
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Espere por favor',
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    this._managementService.sendVerificationEmail(user)
          .subscribe(
            response => {
              console.log(response);
              if(response.ok && response.status == 200){
                let code = JSON.parse(((<any>response)._body)).code;
                if(code){
                  this._userService.saveUser(user);
                  localStorage.setItem('code_verify', code);
                  this.router.navigate(['/verifyemail']);
                }
              }else {
                this.showToast('Ha ocurrido un error', 'danger');
              }
              loading.dismiss();
            },
            error => {
              console.log(error);
              loading.dismiss();
            }
          );

  }
}
