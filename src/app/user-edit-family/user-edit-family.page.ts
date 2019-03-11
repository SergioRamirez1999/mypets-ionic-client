import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserService, ManagementService } from '../services/index.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-edit-family',
  templateUrl: './user-edit-family.page.html',
  styleUrls: ['./user-edit-family.page.scss'],
})
export class UserEditFamilyPage implements OnInit {

  @Input()
  private param_user_family: string;
  private user:User;
  private token:string;
  private formFamily: FormGroup;
  private family: AbstractControl;

  constructor(private formBuilder: FormBuilder,
              private modalCtrl:ModalController,
              private _userService: UserService,
              private _managementService: ManagementService) {
    this.formFamily = this.formBuilder.group({
      family : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])]
    });
    this.family = this.formFamily.controls['family'];

    this.user = this._userService.getUser();
    this.token = this._userService.getToken();
  }

  ngOnInit(){
    this.family.setValue(this.param_user_family);
  }

  onSubmit(){
    let family_changed = this.family.value;
    let user:User = this.user;

    this._managementService.joinUserToFamily(this.token, user.id, family_changed)
          .subscribe(
            response => {
              console.log(response);
              if(response.ok && response.status == 200){
                this.user = JSON.parse((<any>response)._body);
                this._userService.saveUser(this.user);
              }
            },
            error => {
              console.log(error);
            }
          );

    this.modalCtrl.dismiss({
      'user_family_updated': this.family.value
    });
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

}
