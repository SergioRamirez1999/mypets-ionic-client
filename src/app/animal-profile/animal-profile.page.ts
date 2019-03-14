import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Animal } from '../model/index.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.page.html',
  styleUrls: ['./animal-profile.page.scss'],
})
export class AnimalProfilePage implements OnInit {

  @ViewChild(IonSegment) segment:IonSegment;
  private animal:Animal;
  private urlGetImage:string = 'http://localhost:8080/apianimals/services/download/image?filename=';
  private comidas = [
    {
      alimento:"croquetas",
      hora:"9:00AM",
      alimentado:true
    },
    {
      alimento:"snacks",
      hora:"12:00PM",
      alimentado:true
    },
    {
      alimento:"pollito",
      hora:"16:00PM",
      alimentado:true
    },
    {
      alimento:"croquetas",
      hora:"19:00PM",
      alimentado:false
    },
    {
      alimento:"pollito",
      hora:"22:00PM",
      alimentado:false
    }
  ];

  constructor(private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => this.animal = JSON.parse(params.get('animal')));
    this.segment.value = "comidas";
  }

  private segmentChanged(event:any){
    if(event.detail.value == 'medicina'){
      this.comidas = [
        {
          alimento:"Bayer",
          hora:"14:00PM",
          alimentado:true
        },
        {
          alimento:"Merca",
          hora:"18:00PM",
          alimentado:false
        },
        {
          alimento:"Mejoralito",
          hora:"22:00PM",
          alimentado:false
        }
      ];
    }else if(event.detail.value == "comidas"){
      this.comidas = [
        {
          alimento:"croquetas",
          hora:"9:00AM",
          alimentado:true
        },
        {
          alimento:"snacks",
          hora:"12:00PM",
          alimentado:true
        },
        {
          alimento:"pollito",
          hora:"16:00PM",
          alimentado:true
        },
        {
          alimento:"croquetas",
          hora:"19:00PM",
          alimentado:false
        },
        {
          alimento:"pollito",
          hora:"22:00PM",
          alimentado:false
        }
      ];
    }
  }

}
