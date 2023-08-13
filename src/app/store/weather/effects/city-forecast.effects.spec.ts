import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { CityForecastEffects } from './city-forecast.effects';
import { CityForecastActions } from '../actions/city-forecast.actions';
import { WeatherService } from '../../../core/api/weather.service';
import { LocalStorageService } from '../../../core/local-storage.service';

describe('CityForecastEffects', () => {
  let actions$: Observable<any>;
  let effects: CityForecastEffects;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;
  let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCityForecast']);
    const localStorageServiceMock = jasmine.createSpyObj('LocalStorageService', ['getItem', 'setItem']);

    TestBed.configureTestingModule({
      providers: [
        CityForecastEffects,
        provideMockActions(() => actions$),
        { provide: WeatherService, useValue: weatherServiceMock },
        { provide: LocalStorageService, useValue: localStorageServiceMock }
      ]
    });

    effects = TestBed.inject(CityForecastEffects);
    weatherServiceSpy = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
    localStorageServiceSpy = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
  });

  it('should loadCityForecast$ failure', () => {
    const cityName = 'London';
    const action = CityForecastActions.loadCityForecast({ data: cityName });
    const error = 'An error occurred';

    weatherServiceSpy.getCityForecast.and.returnValue(throwError(error));

    actions$ = of(action);

    effects.loadCityForecast$.subscribe(result => {
      expect(result).toEqual(CityForecastActions.loadCityForecastFailure({ error }));
      expect(weatherServiceSpy.getCityForecast).toHaveBeenCalledWith(cityName);
    });
  });
});
