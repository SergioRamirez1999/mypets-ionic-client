import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Animal, User } from '../model/index.model';
import { AnimalService, UserService, ManagementService, Utils } from '../services/index.service';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.page.html',
  styleUrls: ['./animal-create.page.scss'],
})
export class AnimalCreatePage implements OnInit {

  private formAnimalCreate: FormGroup;
  private name:AbstractControl;
  private type:AbstractControl;
  private birthdate:AbstractControl;
  private weight:AbstractControl;
  private image:AbstractControl;
  private imageToUpload:File;
  private user:User;
  private token:string;

  constructor(private formBuilder:FormBuilder,
              private _animalService: AnimalService,
              private _userService: UserService,
              private _managementService: ManagementService,
              private loadingCtrl: LoadingController,
              private _utils: Utils) {

    this.token = _userService.getToken();
    this.user = _userService.getUser();

    this.formAnimalCreate = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])],
      type: ['', Validators.compose([
        Validators.required
      ])],
      birthdate: ['', Validators.compose([
        Validators.required
      ])],
      weight: ['', Validators.compose([
        Validators.required,
        Validators.min(0.0),
        Validators.max(500.0)
      ])],
      image: ['', Validators.required]
    });

    this.name = this.formAnimalCreate.controls['name'];
    this.type = this.formAnimalCreate.controls['type'];
    this.birthdate = this.formAnimalCreate.controls['birthdate'];
    this.weight = this.formAnimalCreate.controls['weight'];
    this.image = this.formAnimalCreate.controls['image'];

  }

  ngOnInit() {

  }


  private fileChangeEvent(fileInput: any){
    this.imageToUpload = fileInput.target.files[0];
  }

  private async onSubmit(){
    let name = this.name.value;
    let type = this.type.value;
    let birthdate = this.birthdate.value;
    let weight = this.weight.value;

    if(name && type && birthdate && weight){
      let animal:Animal = new Animal(null,name,birthdate,weight,type,null);
      const loading = await this.loadingCtrl.create({
        spinner: 'bubbles',
        message: 'Espere por favor...',
        cssClass: 'custom-class custom-loading'
      });
      await loading.present();
      //PETICION GUARDADO ANIMAL
      this._animalService.saveAnimal(this.token, animal)
            .subscribe(
              response => {
                let animalSaved:Animal = JSON.parse((<any>response)._body);
                if(animalSaved){
                  //SI EL ANIMAL SE GUARDO BIEN LO JOINEAMOS A UNA FAMILIA
                  this._managementService.joinAnimalToFamily(this.token, this.user.familyGroup.id, animalSaved.id)
                        .subscribe(
                          response => {
                            if(response.ok && response.status == 200){
                              //SI EL ANIMAL SE JOINEO BIEN

                              this._managementService.uploadImage(this.token, this.imageToUpload)
                                    .subscribe(
                                      response => {
                                        if(response.ok && response.status == 200){
                                          this._utils.showToast('Mascota agregada', 'primary');
                                        }else {
                                          this._utils.showToast('Ha ocurrido un error', 'danger');
                                        }
                                      },
                                      error => {
                                        console.error(error);
                                      }
                                    );

                            }else{
                              this._utils.showToast('Ha ocurrido un error', 'danger');
                            }
                          },
                          error => {
                            console.error(error);
                          }
                        );
                }
                loading.dismiss();
              },
              error => {
                console.error(error);
                loading.dismiss();
              }
            );
    }
  }

  private onSubmitImage(){

  }

}
