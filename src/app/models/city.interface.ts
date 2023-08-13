import { Forecast, Weather } from './weather.interface';

export interface FavoriteCity {
  [cityName: string]: {
    forecast: Forecast;
    weather: Weather;
  }
}
