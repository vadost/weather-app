import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { CityWeatherEffects } from './city-weather.effects';
import { CityWeatherActions } from '../actions/city-weather.actions';
import { WeatherService } from '../../../core/api/weather.service';
import { LocalStorageService } from '../../../core/local-storage.service';
import { Weather } from '../../../models/weather.interface';

describe('CityWeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: CityWeatherEffects;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;
  let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCityWeather']);
    const localStorageServiceMock = jasmine.createSpyObj('LocalStorageService', ['getItem', 'setItem']);

    TestBed.configureTestingModule({
      providers: [
        CityWeatherEffects,
        provideMockActions(() => actions$),
        { provide: WeatherService, useValue: weatherServiceMock },
        { provide: LocalStorageService, useValue: localStorageServiceMock }
      ]
    });

    effects = TestBed.inject(CityWeatherEffects);
    weatherServiceSpy = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
    localStorageServiceSpy = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
  });

  it('should loadCityWeather$ with cache miss', () => {
    const cityName = 'London';
    const action = CityWeatherActions.loadCityWeather({ data: cityName });
    const weatherData = {
      name: 'Kyiv',
      weather: [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      main: {
        "temp": 28,
        "feels_like": 28.03,
        "temp_min": 25.92,
        "temp_max": 28.18,
        "pressure": 1017,
        "humidity": 45
      }
    } as Weather;
    const response = of(weatherData);

    weatherServiceSpy.getCityWeather.and.returnValue(response);
    localStorageServiceSpy.getItem.and.returnValue(null);

    actions$ = of(action);

    effects.loadCityWeather$.subscribe(result => {
      expect(result).toEqual(CityWeatherActions.loadCityWeatherSuccess({ data: weatherData }));
      expect(weatherServiceSpy.getCityWeather).toHaveBeenCalledWith(cityName);
      expect(localStorageServiceSpy.setItem).toHaveBeenCalledWith(
        `city_weather_cache_${cityName}`,
        jasmine.objectContaining({ weatherData, timestamp: jasmine.any(Number) })
      );
    });
  });

  it('should loadCityWeather$ failure', () => {
    const cityName = 'London';
    const action = CityWeatherActions.loadCityWeather({ data: cityName });
    const error = 'An error occurred';

    weatherServiceSpy.getCityWeather.and.returnValue(throwError(error));

    actions$ = of(action);

    effects.loadCityWeather$.subscribe(result => {
      expect(result).toEqual(CityWeatherActions.loadCityWeatherFailure({ error }));
      expect(weatherServiceSpy.getCityWeather).toHaveBeenCalledWith(cityName);
    });
  });
});
