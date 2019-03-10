import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserEditFamilyPage } from './user-edit-family.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditFamilyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserEditFamilyPage]
})
export class UserEditFamilyPageModule {}
