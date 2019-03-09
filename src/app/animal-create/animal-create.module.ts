import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimalCreatePage } from './animal-create.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'', component: AnimalCreatePage}])
  ],
  declarations: [AnimalCreatePage]
})
export class AnimalCreatePageModule {}
