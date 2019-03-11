import { Component } from '@angular/core';
import { UserService } from '../services/index.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/index.model';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserEditNamePage, UserEditLastnamePage, UserEditFamilyPage } from '../index-page';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {

  private user_authenticated:User;
  private url:string = 'http://localhost:8080/apianimals/services/download/image?filename=';

  constructor(private _userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private modalCtrl: ModalController) {
    this.user_authenticated = this._userService.getUser();
  }

  private async open_modal_name(){
    let modal = await this.modalCtrl.create({
      component: UserEditNamePage,
      componentProps: {
        'param_user_name': this.user_authenticated.name
      }
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    if(data && data.user_name_updated){
      document.querySelector(".user_name").innerHTML = data.user_name_updated;
      this.user_authenticated.name = data.user_name_updated;
    }
  }

  private async open_modal_lastname(){
    let modal = await this.modalCtrl.create({
      component: UserEditLastnamePage,
      componentProps: {
        'param_user_lastname': this.user_authenticated.lastName
      }
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    if(data && data.user_lastname_updated){
      document.querySelector(".user_lastname").innerHTML = data.user_lastname_updated;
      this.user_authenticated.lastName = data.user_lastname_updated;
    }
  }

  private async open_modal_family(){
    let modal = await this.modalCtrl.create({
      component: UserEditFamilyPage,
      componentProps: {
        'param_user_family': this.user_authenticated.familyGroup.token
      }
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    if(data && data.user_family_updated){
      document.querySelector(".user_family").innerHTML = data.user_family_updated;
      this.user_authenticated.familyGroup = this._userService.getUser().familyGroup;
    }
  }

}
