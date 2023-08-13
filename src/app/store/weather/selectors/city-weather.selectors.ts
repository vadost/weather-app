import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCityWeather from '../reducers/city-weather.reducer';

export const selectCityWeatherState = createFeatureSelector<fromCityWeather.State>(
  fromCityWeather.cityWeatherFeatureKey
);

export const getCityWeather = createSelector(
  selectCityWeatherState,
  (state) => state.data
);

export const getCityWeatherLoading = createSelector(
  selectCityWeatherState,
  (state) => state.loading
);

export const getloadedCityName = createSelector(
  selectCityWeatherState,
  (state) => state.loadedCityName
);
