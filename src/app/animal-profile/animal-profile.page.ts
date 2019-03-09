import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/index.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.page.html',
  styleUrls: ['./animal-profile.page.scss'],
})
export class AnimalProfilePage implements OnInit {

  animal:Animal;

  constructor(private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => this.animal = JSON.parse(params.get('animal')));
  }

}
