import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/index.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-edit-name',
  templateUrl: './user-edit-name.page.html',
  styleUrls: ['./user-edit-name.page.scss'],
})
export class UserEditNamePage implements OnInit{

  @Input()
  private param_user_name: string;
  private user:User;
  private token:string;
  private formName: FormGroup;
  private name: AbstractControl;

  constructor(private formBuilder: FormBuilder,
              private modalCtrl:ModalController,
              private _userService: UserService) {
    this.formName = this.formBuilder.group({
      name : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])]
    });
    this.name = this.formName.controls['name'];

    this.user = this._userService.getUser();
    this.token = this._userService.getToken();
  }

  ngOnInit(){
    this.name.setValue(this.param_user_name);
  }

  onSubmit(){
    let name_changed = this.name.value;
    let user:User = this.user;
    user.name = name_changed;
    this._userService.updateUser(this.token, user)
          .subscribe(
            response => {
              if(response.ok && response.status == 200){
                this.user = JSON.parse((<any>response)._body);
                this._userService.saveUser(this.user);
              }
            },
            error => {
              console.error(error);
            }
          );
    this.modalCtrl.dismiss({
      'user_name_updated': this.name.value
    });
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

}
