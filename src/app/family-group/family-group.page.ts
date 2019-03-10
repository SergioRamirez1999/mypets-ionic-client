import { Component, OnInit } from '@angular/core';
import { UserService, Utils } from '../services/index.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-family-group',
  templateUrl: './family-group.page.html',
  styleUrls: ['./family-group.page.scss'],
})
export class FamilyGroupPage implements OnInit {

  private users:Array<User>;
  private token:string;
  private user:User;
  private urlGetImage:string = 'http://localhost:8080/apianimals/services/download/image?filename=';

  constructor(private _userService: UserService,
              private _utils: Utils,
              private router: Router) {

  }

  ngOnInit() {
    this.token = this._userService.getToken();
    this.user = this._userService.getUser();
    this._userService.getUsersByFamily(this.token, this.user.familyGroup.id)
          .subscribe(
            response => {
              if(response.ok && response.status == 200){
                this.users = JSON.parse((<any> response)._body);
              }else {
                this._utils.showToast('Ha ocurrido un error', 'danger');
              }
            },
            error => {
              console.error(error);
            }
          );
  }


}
