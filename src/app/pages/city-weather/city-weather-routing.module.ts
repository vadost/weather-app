import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherContainerComponent } from './city-weather.container.component';
import { FavoriteCitiesGuard } from '../favorite-cities/guards/favorite-cities.guard';

const routes: Routes = [{ path: '', component: CityWeatherContainerComponent, canActivate: [FavoriteCitiesGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityWeatherRoutingModule { }
