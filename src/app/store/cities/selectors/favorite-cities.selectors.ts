import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFavoriteCities from '../reducers/favorite-cities.reducer';

export const selectFavoriteCitiesState = createFeatureSelector<fromFavoriteCities.State>(
  fromFavoriteCities.favoriteCitiesFeatureKey
);

export const getFavoriteCities = createSelector(
  selectFavoriteCitiesState,
  (state) => state.data
);

export const getFavoriteCitiesLoading = createSelector(
  selectFavoriteCitiesState,
  (state) => state.loading
);
