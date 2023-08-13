import * as fromFavoriteCities from '../reducers/favorite-cities.reducer';
import { selectFavoriteCitiesState } from './favorite-cities.selectors';

describe('FavoriteCities Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFavoriteCitiesState({
      [fromFavoriteCities.favoriteCitiesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
