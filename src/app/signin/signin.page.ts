import { Component } from '@angular/core';
import { UserService, Utils } from '../services/index.service';
import { User } from '../model/index.model';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {

  formSignin:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  userForm:any;
  user:User;

  constructor(private _userService: UserService,
              private router: Router,
              private _utils: Utils,
              private formBuilder: FormBuilder,
              private loadingCtrl: LoadingController) {

    this.formSignin = formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.email = this.formSignin.controls['email'];
    this.password = this.formSignin.controls['password'];
  }

  private async onSubmit(){

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Espere por favor...',
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();

    this.userForm = {
      email: this.email.value,
      password: this.password.value
    };

    this._userService.signin(this.userForm)
        .subscribe(
          response => {
            if(response.ok && response.status == 200){
              let body:any = JSON.parse((<any>response)._body);
              let user:any = body.user;
              let token:string = body.token;
              if(token && user){
                this._userService.getUserByEmail( user.username )
                    .subscribe(
                      response => {
                        if(response.ok && response.status == 200){
                          let user:any = JSON.parse((<any>response)._body);
                          this.user = this._utils.format_user(user);
                          this._userService.saveToken(token);
                          this._userService.saveUser(this.user);
                          if(this.user.familyGroup){
                            this.router.navigate(['']);
                          }else {
                            this.router.navigate(['/familymanagement']);
                          }
                        }else {
                          this._utils.showToast('Ha ocurrido un error', 'danger');
                        }

                      },
                      error => {
                        console.error(error);
                      }
                    );
              }
            }else {
              this._utils.showToast('Ha ocurrido un error', 'danger');
            }
            loading.dismiss();
          },
          error => {
            let errorMessage = JSON.parse((<any>error)._body).error;
            if(errorMessage == 'Bad credentials'){
              this._utils.showToast('Usuario y/o password incorrectos', 'danger');
            }else if(errorMessage == 'User is disabled'){
              this._userService.getUserByEmail(this.userForm.email)
                    .subscribe(
                      response => {
                        if(response.ok && response.status == 200){
                          let userToSendEmail = JSON.parse((<any>response)._body);
                          this._utils.sendVerificationEmail(userToSendEmail);
                        }
                      },
                      error => {
                        console.error(error);
                      }
                    );
            }
            loading.dismiss();
          }
        );
  }

  private navigate_signup(){
    this.router.navigate(['/signup']);
  }

}
