import { createFeature, createReducer, on } from '@ngrx/store';
import { CityForecastActions } from '../actions/city-forecast.actions';
import { Forecast } from '../../../models/weather.interface';

export const cityForecastFeatureKey = 'cityForecast';

export interface State {
  data: Forecast | null;
  error: any;
  loading: boolean;
}

export const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(CityForecastActions.loadCityForecast, state => ({
    ...state,
    error: null,
    loading: true,
  })),
  on(CityForecastActions.loadCityForecastSuccess, (state, action) => ({
    data: action.data,
    error: null,
    loading: false,
  })),
  on(CityForecastActions.loadCityForecastFailure, (state, action) => ({
    data: null,
    error: action.error,
    loading: false,
  })),
);

export const cityForecastFeature = createFeature({
  name: cityForecastFeatureKey,
  reducer,
});

