import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forecast, Weather } from '../../models/weather.interface';
import {
  getCityWeather,
  getCityWeatherLoading,
  getloadedCityName
} from '../../store/weather/selectors/city-weather.selectors';
import { getCityForecast, getCityForecastLoading } from '../../store/weather/selectors/city-forecast.selectors';
import { CityWeatherActions } from '../../store/weather/actions/city-weather.actions';
import { CityForecastActions } from '../../store/weather/actions/city-forecast.actions';
import { FavoriteCitiesActions } from '../../store/cities/actions/favorite-cities.actions';
import { getFavoriteCities } from '../../store/cities/selectors/favorite-cities.selectors';
import { FavoriteCity } from '../../models/city.interface';

@Component({
  selector: 'app-city-weather-container',
  template: `
    <app-city-weather [cityWeather]="cityWeather$ | async"
                      [cityWeatherLoading]="cityWeatherLoading$ | async"
                      [cityForecast]="cityForecast$ | async"
                      [cityForecastLoading]="cityForecastLoading$ | async"
                      [loadedCityName]="loadedCityName$ | async"
                      [favoriteCities]="favoriteCities$ | async"
                      (loadWeather)="loadWeather($event)"
                      (saveFavoriteCity)="saveFavoriteCity($event)"></app-city-weather>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherContainerComponent {
  cityWeather$: Observable<Weather>;
  cityWeatherLoading$: Observable<boolean>;
  cityForecast$: Observable<Forecast>;
  cityForecastLoading$: Observable<boolean>;
  loadedCityName$: Observable<string>;
  favoriteCities$: Observable<FavoriteCity>;

  constructor(private store: Store) {
    this.cityWeather$ = this.store.pipe(select(getCityWeather));
    this.cityWeatherLoading$ = this.store.pipe(select(getCityWeatherLoading));
    this.cityForecast$ = this.store.pipe(select(getCityForecast));
    this.cityForecastLoading$ = this.store.pipe(select(getCityForecastLoading));
    this.loadedCityName$ = this.store.pipe(select(getloadedCityName));
    this.favoriteCities$ = this.store.pipe(select(getFavoriteCities));
  }

  loadWeather(cityName: string) {
    this.store.dispatch(CityWeatherActions.loadCityWeather({data: cityName}));
    this.store.dispatch(CityForecastActions.loadCityForecast({data: cityName}));
  }

  saveFavoriteCity(cityName: string) {
    if (cityName !== '') {
      this.store.dispatch(FavoriteCitiesActions.saveFavoriteCity({data: cityName}));
    }
  }
}
