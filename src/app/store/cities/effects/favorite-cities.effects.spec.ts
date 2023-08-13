import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FavoriteCitiesEffects } from './favorite-cities.effects';

describe('FavoriteCitiesEffects', () => {
  let actions$: Observable<any>;
  let effects: FavoriteCitiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoriteCitiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FavoriteCitiesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
