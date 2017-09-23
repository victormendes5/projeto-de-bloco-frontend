import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.route';

import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FirefightersService } from './services/firefighters.service';
import { HealthPostsService } from './services/health-posts.service';
import { HotelService } from './services/hotel.service';
import { OlympicGamesService } from './services/olympic-games.service';
import { PoliceStationsService } from './services/police-stations.service';
import { BeachesService } from './services/beaches.service';
import { AttractionsService } from './services/attractions.service';
import { BathroomsService } from './services/bathrooms.service';
import { SchoolsService } from './services/schools.service';
import { RestaurantsService } from './services/restaurants.service';

import { AppComponent } from './app.component';
import { FirefighterComponent } from './pages/firefighter/firefighter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { PoliceStationComponent } from './pages/police-station/police-station.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { OlympicGamesComponent } from './pages/olympic-games/olympic-games.component';
import { BathroomsComponent } from './pages/bathrooms/bathrooms.component';
import { HealthPostsComponent } from './pages/health-posts/health-posts.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { BeachesComponent } from './pages/beaches/beaches.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBbU_pl7Mupzk2cgizjghFmTFNfds8iifM',
  authDomain: 'frondendprojetodeblocotp9.firebaseapp.com',
  databaseURL: 'https://frondendprojetodeblocotp9.firebaseio.com',
  storageBucket: 'frondendprojetodeblocotp9.appspot.com',
  messagingSenderId: '629335177532'
};

@NgModule({
  declarations: [
    AppComponent,
    FirefighterComponent,
    SidebarComponent,
    LoginComponent,
    PoliceStationComponent,
    HotelComponent,
    OlympicGamesComponent,
    BathroomsComponent,
    HealthPostsComponent,
    SchoolsComponent,
    AttractionsComponent,
    BeachesComponent,
    RestaurantsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtCtvlzRe53bePZ5IvtSElwudl4itJBOk'
    })
  ],
  providers: [
    FirefightersService,
    HealthPostsService,
    HotelService,
    OlympicGamesService,
    PoliceStationsService,
    BeachesService,
    AttractionsService,
    BathroomsService,
    SchoolsService,
    RestaurantsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
