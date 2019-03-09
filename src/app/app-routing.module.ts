import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardStorageService, AuthGuardVerifyService } from './guards/index.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardStorageService]},
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'familymanagement', loadChildren: './family-management/family-management.module#FamilyManagementPageModule', canActivate: [AuthGuardStorageService]},
  { path: 'verifyemail', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule', canActivate: [AuthGuardVerifyService]},
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  // { path: 'userprofile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule' },
  // { path: 'animalprofile/:animal', loadChildren: './animal-profile/animal-profile.module#AnimalProfilePageModule' },
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
