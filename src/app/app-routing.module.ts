import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  // { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  // { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  // { path: 'userprofile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule' },
  // { path: 'animalprofile/:animal', loadChildren: './animal-profile/animal-profile.module#AnimalProfilePageModule' },
  // { path: 'verifyemail', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule' },
  // { path: 'familymanagement', loadChildren: './family-management/family-management.module#FamilyManagementPageModule' },
  // { path: 'animalcreate', loadChildren: './animal-create/animal-create.module#AnimalCreatePageModule' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryPageModule' },
  // { path: 'maps', loadChildren: './maps/maps.module#MapsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
