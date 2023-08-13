import { createActionGroup, props } from '@ngrx/store';
import { Forecast } from '../../../models/weather.interface';

export const CityForecastActions = createActionGroup({
  source: 'CityForecast',
  events: {
    'Load CityForecast': props<{ data: string }>(),
    'Load CityForecast Success': props<{ data: Forecast }>(),
    'Load CityForecast Failure': props<{ error: unknown }>(),
  }
});
