import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/city-weather/city-weather.module').then(m => m.CityWeatherModule), pathMatch: "full" },
  { path: 'favorite-cities', loadChildren: () => import('./pages/favorite-cities/favorite-cities.module').then(m => m.FavoriteCitiesModule) },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
