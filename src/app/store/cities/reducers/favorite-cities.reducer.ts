import { createFeature, createReducer, on } from '@ngrx/store';
import { FavoriteCitiesActions } from '../actions/favorite-cities.actions';
import { FavoriteCity } from '../../../models/city.interface';

export const favoriteCitiesFeatureKey = 'favoriteCities';

export interface State {
  data: FavoriteCity;
  error: any;
  loading: boolean;
}

export const initialState: State = {
  data: {},
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(FavoriteCitiesActions.loadFavoriteCities, state => ({
    ...state,
    error: null,
    loading: true,
  })),
  on(FavoriteCitiesActions.loadFavoriteCitiesSuccess, (state, action) => ({
    data: action.data,
    error: null,
    loading: false,
  })),
  on(FavoriteCitiesActions.loadFavoriteCitiesFailure, (state, action) => ({
    data: null,
    error: action.error,
    loading: false,
  })),
);

export const favoriteCitiesFeature = createFeature({
  name: favoriteCitiesFeatureKey,
  reducer,
});

