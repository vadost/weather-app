import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CityWeatherEffects } from './city-weather.effects';

describe('CityWeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: CityWeatherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CityWeatherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CityWeatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
