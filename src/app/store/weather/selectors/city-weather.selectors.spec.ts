import * as fromCityWeather from '../reducers/city-weather.reducer';
import { selectCityWeatherState, getCityWeather, getCityWeatherLoading, getloadedCityName } from './city-weather.selectors';
import { Weather } from '../../../models/weather.interface';

describe('CityWeather Selectors', () => {
  const initialState: fromCityWeather.State = {
    data: null,
    loadedCityName: '',
    error: false,
    loading: false,
  };

  it('should select the cityWeather state', () => {
    const result = selectCityWeatherState({
      [fromCityWeather.cityWeatherFeatureKey]: initialState
    });

    expect(result).toEqual(initialState);
  });

  it('should select getCityWeather', () => {
    const cityWeatherData = {
      name: 'Kyiv',
      weather: [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      main: {
        "temp": 28,
        "feels_like": 28.03,
        "temp_min": 25.92,
        "temp_max": 28.18,
        "pressure": 1017,
        "humidity": 45
      }
    } as Weather;
    const state: fromCityWeather.State = {
      ...initialState,
      data: cityWeatherData
    };

    const result = getCityWeather.projector(state);

    expect(result).toEqual(cityWeatherData);
  });

  it('should select getCityWeatherLoading', () => {
    const loading = true;
    const state: fromCityWeather.State = {
      ...initialState,
      loading: loading
    };

    const result = getCityWeatherLoading.projector(state);

    expect(result).toBe(loading);
  });

  it('should select getloadedCityName', () => {
    const loadedCityName = 'London';
    const state: fromCityWeather.State = {
      ...initialState,
      loadedCityName: loadedCityName
    };

    const result = getloadedCityName.projector(state);

    expect(result).toBe(loadedCityName);
  });
});
