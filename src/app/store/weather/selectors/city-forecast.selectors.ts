import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCityForecast from '../reducers/city-forecast.reducer';

export const selectCityForecastState = createFeatureSelector<fromCityForecast.State>(
  fromCityForecast.cityForecastFeatureKey
);

export const getCityForecast = createSelector(
  selectCityForecastState,
  (state) => state.data
);

export const getCityForecastLoading = createSelector(
  selectCityForecastState,
  (state) => state.loading
);
