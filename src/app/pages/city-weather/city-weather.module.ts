import { NgModule } from '@angular/core';

import { CityWeatherRoutingModule } from './city-weather-routing.module';
import { CityWeatherComponent } from './components/city-weather.component';
import { CityWeatherContainerComponent } from './city-weather.container.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CityWeatherComponent,
    CityWeatherContainerComponent
  ],
  imports: [
    SharedModule,
    CityWeatherRoutingModule
  ]
})
export class CityWeatherModule { }
