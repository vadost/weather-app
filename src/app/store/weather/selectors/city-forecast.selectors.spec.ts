import * as fromCityForecast from '../reducers/city-forecast.reducer';
import { selectCityForecastState, getCityForecast, getCityForecastLoading } from './city-forecast.selectors';

describe('CityForecast Selectors', () => {
  const initialState: fromCityForecast.State = {
    data: null,
    error: null,
    loading: false
  };

  it('should select the cityForecast state', () => {
    const result = selectCityForecastState({
      [fromCityForecast.cityForecastFeatureKey]: initialState
    });

    expect(result).toEqual(initialState);
  });

  it('should select getCityForecast', () => {
    const cityForecastData = {
      dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
      maxTemps: [25.93, 31.6, 34.04, 32.56, 32.16, 32.21],
      minTemps: [19.93, 17.8, 20.49, 20.83, 19.51, 19.51],
      weatherDescriptions: ["clear sky", "clear sky", "scattered clouds", "clear sky", "clear sky", "clear sky"]
    };
    const state: fromCityForecast.State = {
      ...initialState,
      data: cityForecastData
    };

    const result = getCityForecast.projector(state);

    expect(result).toEqual(cityForecastData);
  });

  it('should select getCityForecastLoading', () => {
    const loading = true;
    const state: fromCityForecast.State = {
      ...initialState,
      loading: loading
    };

    const result = getCityForecastLoading.projector(state);

    expect(result).toBe(loading);
  });
});
