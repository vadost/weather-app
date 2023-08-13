import * as fromCityForecast from '../reducers/city-forecast.reducer';
import { selectCityForecastState } from './city-forecast.selectors';

describe('CityForecast Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCityForecastState({
      [fromCityForecast.cityForecastFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
