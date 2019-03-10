import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/index.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/index.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  private user_authenticated:User;
  private url:string = 'http://localhost:8080/apianimals/services/download/image?filename=';

  constructor(private _userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.user_authenticated = this._userService.getUser();
  }

  ngOnInit() {
  }

  private navigate_edit_name(){
    this.router.navigate(['/tabs/usereditname']);
  }

  private navigate_edit_lastname(){
    this.router.navigate(['/tabs/usereditlastname']);
  }

  private navigate_edit_family(){
    this.router.navigate(['/tabs/usereditfamily']);
  }

}
