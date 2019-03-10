import { Injectable } from '@angular/core';
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
