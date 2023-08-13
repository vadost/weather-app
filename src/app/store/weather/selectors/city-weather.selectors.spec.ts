import * as fromCityWeather from '../reducers/city-weather.reducer';
import { selectCityWeatherState } from './city-weather.selectors';

describe('CityWeather Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCityWeatherState({
      [fromCityWeather.cityWeatherFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
