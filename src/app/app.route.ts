import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirefighterComponent } from './pages/firefighter/firefighter.component';
import { PoliceStationComponent } from './pages/police-station/police-station.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { OlympicGamesComponent } from './pages/olympic-games/olympic-games.component';
import { HealthPostsComponent } from './pages/health-posts/health-posts.component';
import { BathroomsComponent } from './pages/bathrooms/bathrooms.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { BeachesComponent } from './pages/beaches/beaches.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: '/firefighter', pathMatch: 'full' },
  { path: 'firefighter',    component: FirefighterComponent },
  { path: 'police-station', component: PoliceStationComponent },
  { path: 'hotel',          component: HotelComponent },
  { path: 'olympic-games',  component: OlympicGamesComponent },
  { path: 'health-posts',   component: HealthPostsComponent },
  { path: 'bathrooms',      component: BathroomsComponent },
  { path: 'schools',        component: SchoolsComponent },
  { path: 'attractions',    component: AttractionsComponent },
  { path: 'beaches',        component: BeachesComponent },
  { path: 'restaurants',    component: RestaurantsComponent },
  { path: '**',             component: FirefighterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
