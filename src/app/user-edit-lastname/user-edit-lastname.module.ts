import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserEditLastnamePage } from './user-edit-lastname.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditLastnamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserEditLastnamePage]
})
export class UserEditLastnamePageModule {}
