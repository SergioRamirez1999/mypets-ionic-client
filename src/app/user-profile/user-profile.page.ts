import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/index.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/index.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  private user_authenticated:User;
  private url:string = 'http://localhost:8080/apianimals/services/download/image?filename=';

  constructor(private _userService: UserService,
              private activatedRoute: ActivatedRoute) {
    this.user_authenticated = this._userService.getUser();
    console.log(this.user_authenticated);
  }

  ngOnInit() {
  }

}
