import { Component } from '@angular/core';
import { User } from '../model/index.model';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { UserService, ManagementService, Utils } from '../services/index.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-management',
  templateUrl: './family-management.page.html',
  styleUrls: ['./family-management.page.scss'],
})
export class FamilyManagementPage  {

  formGroupCreate: FormGroup;
  formGroupJoin: FormGroup;

  create_family_token: AbstractControl;
  join_family_token: AbstractControl;

  showCreateGroup:boolean = false;
  showJoinGroup:boolean = false;

  user:User;

  token:string;

  constructor(private formBuilder: FormBuilder,
              private _userService: UserService,
              private _managementService: ManagementService,
              private _utils: Utils,
              private loadingCtrl: LoadingController,
              private router: Router) {

    this.formGroupCreate = formBuilder.group({
      create_family_token: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])]
    });
    this.create_family_token = this.formGroupCreate.controls['create_family_token'];

    this.formGroupJoin = formBuilder.group({
      join_family_token: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])]
    });
    this.join_family_token = this.formGroupJoin.controls['join_family_token'];

    this.user = _userService.getUser();

    this.token = _userService.getToken();

  }

  private async onSubmit() {
    if(this.user && this.token){
      let token_family = this.create_family_token.value;
      if(!token_family){
        token_family = this.join_family_token.value;
      }
      const loading = await this.loadingCtrl.create({
        spinner: 'bubbles',
        message: 'Espere por favor...',
        cssClass: 'custom-class custom-loading'
      });
      await loading.present();
      this._managementService.joinUserToFamily(this.token, this.user.id, token_family)
          .subscribe(
            response => {
              if(response.ok && response.status == 200){
                let user = JSON.parse((<any>response)._body);
                if(user){
                  this._userService.saveUser(user);
                  this.router.navigate(['/home']);
                }
              }else {
                this._utils.showToast('Ha ocurrido un error', 'danger');
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

  onCreateGroup(){
    this.showJoinGroup = false;
    this.showCreateGroup = true;
  }

  onJoinGroup(){
    this.showJoinGroup = true;
    this.showCreateGroup = false;
  }

}
