import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CityForecastActions } from '../actions/city-forecast.actions';
import { WeatherService } from '../../../core/api/weather.service';
import { ForecastDataTransformer } from '../../../models/weather.interface';
import { LocalStorageService } from '../../../core/local-storage.service';


@Injectable()
export class CityForecastEffects {

  private readonly CACHE_KEY_PREFIX = 'city_forecast_cache_';
  private readonly CACHE_EXPIRATION_TIME_MS = 60 * 60 * 1000; // 1 hour

  loadCityForecast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CityForecastActions.loadCityForecast),
      switchMap((payload) => {
        const cacheKey = this.CACHE_KEY_PREFIX + payload.data;

        const cachedData = this.LocalStorageService.getItem(cacheKey);
        const currentTime = Date.now();

        if (cachedData && cachedData.timestamp && (currentTime - cachedData.timestamp) < this.CACHE_EXPIRATION_TIME_MS) {
          // Use cached data if it's still valid
          return of(CityForecastActions.loadCityForecastSuccess({ data: cachedData.forecastData }));
        } else {
          return this.weatherService.getCityForecast(payload.data).pipe(
            map(data => {
              // Save new data to cache
              const groupDailyForecasts = new ForecastDataTransformer(data).groupDailyForecasts()
              this.LocalStorageService.setItem(cacheKey, { forecastData: groupDailyForecasts, timestamp: currentTime });
              return CityForecastActions.loadCityForecastSuccess({ data: groupDailyForecasts });
            }),
            catchError(error => of(CityForecastActions.loadCityForecastFailure({ error })))
          );
        }
      })
    );
  });

  constructor(private actions$: Actions,
              private weatherService: WeatherService,
              private LocalStorageService: LocalStorageService) {}
}

