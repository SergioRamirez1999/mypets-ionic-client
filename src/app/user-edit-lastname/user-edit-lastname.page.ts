import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/index.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-edit-lastname',
  templateUrl: './user-edit-lastname.page.html',
  styleUrls: ['./user-edit-lastname.page.scss'],
})
export class UserEditLastnamePage implements OnInit {

  @Input()
  private param_user_lastname:string;
  private formLastname: FormGroup;
  private lastname: AbstractControl;
  private user:User;
  private token:string;

  constructor(private formBuilder: FormBuilder,
              private _userService: UserService,
              private modalCtrl: ModalController) {
    this.formLastname = this.formBuilder.group({
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])]
    });

    this.lastname = this.formLastname.controls['lastname'];
    this.user = this._userService.getUser();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.lastname.setValue(this.param_user_lastname);
  }

  onSubmit(){
    let lastname_changed = this.lastname.value;
    let user:User = this.user;
    user.name = lastname_changed;
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
      'user_lastname_updated': this.lastname.value
    });
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

}
