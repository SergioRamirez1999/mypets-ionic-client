import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'inventory',
        children: [
          {
            path: '',
            loadChildren: '../inventory/inventory.module#InventoryPageModule'
          }

        ]
      },
      {
        path: 'maps',
        children: [
          {
            path: '',
            loadChildren: '../maps/maps.module#MapsPageModule'
          }
        ]
      },
      {
        path: 'animalcreate',
        children: [
          {
            path: '',
            loadChildren: '../animal-create/animal-create.module#AnimalCreatePageModule'
          }
        ]
      },
      {
        path: 'animalprofile/:animal',
        children: [
          {
            path: '',
            loadChildren: '../animal-profile/animal-profile.module#AnimalProfilePageModule'
          }
        ]
      },
      {
        path: 'userprofile',
        children: [
          {
            path: '',
            loadChildren: '../user-profile/user-profile.module#UserProfilePageModule'
          }
        ]
      },
      {
        path: 'familygroup',
        children: [
          {
            path: '',
            loadChildren: '../family-group/family-group.module#FamilyGroupPageModule'
          }
        ]
      },
      {
        path: 'configuration',
        children: [
          {
            path: '',
            loadChildren: '../configuration/configuration.module#ConfigurationPageModule'
          }
        ]
      },
      {
        path: 'usereditname',
        children: [
          {
            path: '',
            loadChildren: '../user-edit-name/user-edit-name.module#UserEditNamePageModule'
          }
        ]
      },
      {
        path: 'usereditlastname',
        children: [
          {
            path: '',
            loadChildren: '../user-edit-lastname/user-edit-lastname#UserEditLastnamePageModule'
          }
        ]
      },
      {
        path: 'usereditfamily',
        children: [
          {
            path: '',
            loadChildren: '../user-edit-family/user-edit-family#UserEditFamilyPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TabsPageRoutingModule {}
