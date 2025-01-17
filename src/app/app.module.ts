import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//guards
import { AuthGuardStorageService } from './guards/authguardstorage.service';

//plugins
import { AgmCoreModule } from '@agm/core';

import { UserEditNamePage, UserEditLastnamePage, UserEditFamilyPage } from './index-page';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UserEditNamePage, UserEditLastnamePage, UserEditFamilyPage],
  entryComponents: [UserEditNamePage, UserEditLastnamePage, UserEditFamilyPage],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyCHhAmpme1uGO5IJQx0G6iYcQOkG2jxYug'
      }
    )
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuardStorageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
