import { Component, OnInit } from '@angular/core';
import { ManagementService, Utils } from '../services/index.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { User } from '../model/index.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  formVerifyCode:FormGroup;
  code:AbstractControl;

  constructor(private _managementService: ManagementService,
              private formBuilder: FormBuilder,
              private router: Router,
              private _utils: Utils) {
    this.formVerifyCode = formBuilder.group({
      code: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ])]
    });

    this.code = this.formVerifyCode.controls['code'];

  }

  ngOnInit() {

  }

  onSubmit(){
    if(this.code.value){
      let code = localStorage.getItem('code_verify');
      if(this.code.value == code){
        let user:User = JSON.parse(localStorage.getItem('user'));
        this._managementService.activateUser(user.id)
            .subscribe(
              response => {
                if(response.ok && response.status == 200){
                  localStorage.removeItem('code_verify');
                  this.router.navigate(['/signin']);
                }else {
                  this._utils.showToast('Ha ocurrido un error', 'danger');
                }
              },
              error => {
                console.error(error);
              }
            )

      }else{
        this._utils.showToast('El codigo ingresado es invalido', 'danger');
      }
    }else {
      console.error("Codigo no ingresado");
    }
  }

}
