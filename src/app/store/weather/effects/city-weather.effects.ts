import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CityWeatherActions } from '../actions/city-weather.actions';
import { WeatherService } from '../../../core/api/weather.service';
import { LocalStorageService } from '../../../core/local-storage.service';


@Injectable()
export class CityWeatherEffects {

  private readonly CACHE_KEY_PREFIX = 'city_weather_cache_';
  private readonly CACHE_EXPIRATION_TIME_MS = 60 * 60 * 1000; // 1 hour
  private cityName = ''

  loadCityWeather$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CityWeatherActions.loadCityWeather),
      switchMap((payload) => {
        this.cityName = payload.data;
        const cacheKey = this.CACHE_KEY_PREFIX + this.cityName;

        const cachedData = this.LocalStorageService.getItem(cacheKey);
        const currentTime = Date.now();

        if (cachedData && cachedData.timestamp && (currentTime - cachedData.timestamp) < this.CACHE_EXPIRATION_TIME_MS) {
          // Use cached data if it's still valid
          return of(CityWeatherActions.loadCityWeatherSuccess({ data: cachedData.weatherData }));
        } else {
          return this.weatherService.getCityWeather(this.cityName).pipe(
            map(data => {
              // Save new data to cache
              this.LocalStorageService.setItem(cacheKey, { weatherData: data, timestamp: currentTime });
              return CityWeatherActions.loadCityWeatherSuccess({ data });
            }),
            catchError(error => of(CityWeatherActions.loadCityWeatherFailure({ error })))
          );
        }
      })
    );
  });

  loadCityWeatherSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CityWeatherActions.loadCityWeatherSuccess),
      map(() => CityWeatherActions.saveLoadedCityName({data: this.cityName})
      )
    );
  });

  constructor(private actions$: Actions,
              private weatherService: WeatherService,
              private LocalStorageService: LocalStorageService) {}
}

