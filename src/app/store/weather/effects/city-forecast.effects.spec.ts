import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CityForecastEffects } from './city-forecast.effects';

describe('CityForecastEffects', () => {
  let actions$: Observable<any>;
  let effects: CityForecastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CityForecastEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CityForecastEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
