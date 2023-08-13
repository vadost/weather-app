import { createFeature, createReducer, on } from '@ngrx/store';
import { CityWeatherActions } from '../actions/city-weather.actions';
import { Weather } from '../../../models/weather.interface';

export const cityWeatherFeatureKey = 'cityWeather';

export interface State {
  data: Weather | null;
  loadedCityName: string;
  error: any;
  loading: boolean;
}

export const initialState: State = {
  data: null,
  loadedCityName: '',
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(CityWeatherActions.loadCityWeather, state => ({
    ...state,
    error: null,
    loading: true,
  })),
  on(CityWeatherActions.loadCityWeatherSuccess, (state, action) => ({
    ...state,
    data: action.data,
    error: null,
    loading: false,
  })),
  on(CityWeatherActions.loadCityWeatherFailure, (state, action) => ({
    ...state,
    data: null,
    error: action.error,
    loading: false,
  })),
  on(CityWeatherActions.saveLoadedCityName, (state, action) => ({
    ...state,
    loadedCityName: action.data,
  })),
);

export const cityWeatherFeature = createFeature({
  name: cityWeatherFeatureKey,
  reducer,
});

