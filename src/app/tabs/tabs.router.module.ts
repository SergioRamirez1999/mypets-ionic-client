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
