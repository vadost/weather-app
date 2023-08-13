import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { FavoriteCitiesEffects } from './favorite-cities.effects';
import { FavoriteCitiesActions } from '../actions/favorite-cities.actions';
import { LocalStorageService } from '../../../core/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { getCityWeather } from '../../weather/selectors/city-weather.selectors';
import {  Weather } from '../../../models/weather.interface';
import { Forecast } from '../../../models/weather.interface';
import { getCityForecast } from '../../weather/selectors/city-forecast.selectors';

describe('FavoriteCitiesEffects', () => {
  let actions$: Observable<any>;
  let effects: FavoriteCitiesEffects;
  let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let mockStore: MockStore;

  beforeEach(() => {
    const localStorageServiceMock = jasmine.createSpyObj('LocalStorageService', ['getItem', 'setItem']);
    const snackBarMock = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        FavoriteCitiesEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        { provide: LocalStorageService, useValue: localStorageServiceMock },
        { provide: MatSnackBar, useValue: snackBarMock },
      ],
    });

    effects = TestBed.inject(FavoriteCitiesEffects);
    localStorageServiceSpy = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    mockStore = TestBed.inject(MockStore);
  });

  it('should loadFavoriteCities$', () => {
    const favoriteCitiesData = {
      "new york": {
        "weather": {
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "main": {
            "temp": 28.02,
            "feels_like": 30.31,
            "temp_min": 25.96,
            "temp_max": 30.29,
            "pressure": 1011,
            "humidity": 67
          },
          "name": "New York",
        } as Weather,
        "forecast": {
          dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
          maxTemps: [31.73, 30.87, 30.55, 29.38, 29.56, 27.16],
          minTemps: [28.83, 23.63, 24.03, 22.37, 23.85, 24.14],
          weatherDescriptions: ["scattered clouds", "few clouds", "broken clouds", "overcast clouds", "broken clouds", "scattered clouds"]
        }
      },
      "kiev": {
        weather: {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "main": {
            "temp": 28.55,
            "feels_like": 28.5,
            "temp_min": 26.48,
            "temp_max": 28.73,
            "pressure": 1017,
            "humidity": 44
          },
          "name": "Kyiv",
        } as Weather,
        forecast: {
          dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
          maxTemps: [28.55, 31.6, 34.04, 32.56, 32.16, 32.21],
          minTemps: [19.93, 17.8, 20.49, 20.83, 19.51, 19.51],
          weatherDescriptions: ["clear sky", "clear sky", "scattered clouds", "clear sky", "clear sky", "clear sky"]
        }
      }
    };
    localStorageServiceSpy.getItem.and.returnValue(favoriteCitiesData);

    actions$ = of(FavoriteCitiesActions.loadFavoriteCities());

    effects.loadFavoriteCities$.subscribe(result => {
      expect(result).toEqual(FavoriteCitiesActions.loadFavoriteCitiesSuccess({ data: favoriteCitiesData }));
    });
  });

  it('should saveFavoriteCity$', () => {
    const cityName = 'London';
    const weatherData: Weather = {
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "main": {
        "temp": 28.55,
        "feels_like": 28.5,
        "temp_min": 26.48,
        "temp_max": 28.73,
        "pressure": 1017,
        "humidity": 44
      },
      "name": "Kyiv",
    } as Weather;
    const forecastData: Forecast = {
      dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
      maxTemps: [28.55, 31.6, 34.04, 32.56, 32.16, 32.21],
      minTemps: [19.93, 17.8, 20.49, 20.83, 19.51, 19.51],
      weatherDescriptions: ["clear sky", "clear sky", "scattered clouds", "clear sky", "clear sky", "clear sky"]
    };

    mockStore.overrideSelector(getCityWeather, weatherData);
    mockStore.overrideSelector(getCityForecast, forecastData);

    actions$ = of(FavoriteCitiesActions.saveFavoriteCity({ data: cityName }));

    effects.saveFavoriteCity$.subscribe(result => {
      expect(localStorageServiceSpy.setItem).toHaveBeenCalledWith(
        'savedFavoriteCities',
        jasmine.objectContaining({ [cityName]: jasmine.any(Object) })
      );
      expect(snackBarSpy.open).toHaveBeenCalledWith('City successfully added to favorite', 'Success', { duration: 3000 });
    });
  });
});
