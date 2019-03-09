import { Component } from '@angular/core';
import { User } from '../model/index.model';
import { UserService, ManagementService, Utils } from '../services/index.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  formSignup: FormGroup;
  name: AbstractControl;
  lastname: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  user:any;

  constructor(private _userService: UserService,
              private _managementService: ManagementService,
              private _utils: Utils,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.formSignup = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])],
      password: ['', Validators.required]
    });

    this.name = this.formSignup.controls['name'];
    this.lastname = this.formSignup.controls['lastname'];
    this.email = this.formSignup.controls['email'];
    this.password = this.formSignup.controls['password'];
  }

  private async onSubmit(){
    this.user = {
      name: this.name.value,
      lastName: this.lastname.value,
      email: this.email.value,
      password: this.password.value
    }

    this._userService.signup(this.user)
          .subscribe(
            response => {
              let user:User = JSON.parse((<any>response)._body);
              if(user){
                this._utils.sendVerificationEmail(user);
              }
            },
            error => {
              console.log(error);
            }
          );
  }


}
