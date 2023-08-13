import { reducer, initialState } from './city-forecast.reducer';
import { CityForecastActions } from '../actions/city-forecast.actions';
import { Forecast } from '../../../models/weather.interface';

describe('City Forecast Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any; // Empty action
    const state = reducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set loading to true when loadCityForecast action is dispatched', () => {
    const action = CityForecastActions.loadCityForecast({data: 'London'});
    const state = reducer(initialState, action);

    expect(state.loading).toBeTrue();
  });

  it('should set loading to false and update data on loadCityForecastSuccess action', () => {
    const forecastData: Forecast = {
      dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
      maxTemps: [25.93, 31.6, 34.04, 32.56, 32.16, 32.21],
      minTemps: [19.93, 17.8, 20.49, 20.83, 19.51, 19.51],
      weatherDescriptions: ["clear sky", "clear sky", "scattered clouds", "clear sky", "clear sky", "clear sky"]
    };
    const action = CityForecastActions.loadCityForecastSuccess({ data: forecastData });
    const state = reducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.data).toBe(forecastData);
  });

  it('should set loading to false and update error on loadCityForecastFailure action', () => {
    const error = 'An error occurred';
    const action = CityForecastActions.loadCityForecastFailure({ error });
    const state = reducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.error).toBe(error);
  });
});
