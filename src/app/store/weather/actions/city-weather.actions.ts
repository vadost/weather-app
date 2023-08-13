import { createActionGroup, props } from '@ngrx/store';
import { Weather } from '../../../models/weather.interface';

export const CityWeatherActions = createActionGroup({
  source: 'CityWeather',
  events: {
    'Load CityWeather': props<{ data: string }>(),
    'Load CityWeather Success': props<{ data: Weather }>(),
    'Load CityWeather Failure': props<{ error: unknown }>(),
    'Save Loaded CityName': props<{ data: string }>(),
  }
});
