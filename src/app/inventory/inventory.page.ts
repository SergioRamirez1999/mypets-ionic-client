import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  @ViewChild(IonSegment) segment:IonSegment;

  inventory: Observable<any>;

  constructor(private _dataService:DataService,
              private alertCtrl:AlertController) {

  }

  ngOnInit() {
    this.segment.value = "comidas"
    this.inventory = this._dataService.getInventoryFoodOpts();
    console.log(this.inventory);
  }

  private segmentChanged( event:any ){

    if(event.detail.value == "medicinas"){
      this.inventory = this._dataService.getInventoryMedicineOpts();
    }else if(event.detail.value == "comidas"){
      this.inventory = this._dataService.getInventoryFoodOpts();
    }
  }

  private async onClickDelete(item:any){
    const alert = await this.alertCtrl.create({
      header: '¿Esta seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Borrar',
          handler: () => {
            console.log(item);
          }
        }
      ]
    });

    await alert.present();

  }



}
