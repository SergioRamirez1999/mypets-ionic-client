import { Component } from '@angular/core';
import { UserService, AnimalService } from '../services/index.service';
import { Animal, User } from '../model/index.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:User;
  animals:Animal[];
  users:User[];
  token:string;
  isEmpty:false;

  constructor(private _userService: UserService,
              private _animalService: AnimalService,
              private router: Router){
    this.token = _userService.getToken();
    this.user = _userService.getUser();
    this.getUsersPagination();

  }

  ionViewWillEnter(){
    this.getAnimals();
  }

  private getAnimals(){
    this._animalService.getAnimalsByFamily(this.token, this.user.familyGroup.id)
          .subscribe(
            response => {
              if(response.ok && response.status == 200){
                this.animals = JSON.parse((<any>response)._body);
                var h2 = document.querySelector(".empty");
                h2.textContent = "";
              } else {
                var h2 = document.querySelector(".empty");
                h2.textContent = "No existen animales en el grupo";
              }
            },
            error => {
              console.error(error);
            }
          );
  }

  private getUsersPagination(){
    this._userService.getUsersPagination(this.token, 0)
        .subscribe(
          response =>{
            if(response.ok && response.status == 200){
              let body:any = JSON.parse((<any>response)._body);
              this.users = body.content;
            }
          },
          error =>{
            console.log(error)
          }
        );
  }

  private navigate_animal_profile(animal:Animal){
    this.router.navigate(['/tabs/animalprofile/', JSON.stringify(animal)]);
  }

  private open_animal_create(){
    this.router.navigate(['/tabs/animalcreate']);
  }


}
