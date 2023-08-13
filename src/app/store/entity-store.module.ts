import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
// Reducers
import * as fromCityWeather from './weather/reducers/city-weather.reducer';
import * as fromCityForecast from './weather/reducers/city-forecast.reducer';
import * as fromFavoriteCities from './cities/reducers/favorite-cities.reducer';
// Effects
import { CityWeatherEffects } from './weather/effects/city-weather.effects';
import { CityForecastEffects } from './weather/effects/city-forecast.effects';
import { FavoriteCitiesEffects } from './cities/effects/favorite-cities.effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromCityWeather.cityWeatherFeatureKey, fromCityWeather.reducer),
    StoreModule.forFeature(fromCityForecast.cityForecastFeatureKey, fromCityForecast.reducer),
    StoreModule.forFeature(fromFavoriteCities.favoriteCitiesFeatureKey, fromFavoriteCities.reducer),
    EffectsModule.forRoot([
      CityWeatherEffects,
      CityForecastEffects,
      FavoriteCitiesEffects,
    ]),
  ],
  providers: [],
})
export class EntityStoreModule {
  constructor() { }
}
