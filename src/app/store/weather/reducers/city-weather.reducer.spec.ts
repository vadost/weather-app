import { reducer, initialState } from './city-weather.reducer';
import { CityWeatherActions } from '../actions/city-weather.actions';
import { Weather } from '../../../models/weather.interface';

describe('City Weather Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any; // Empty action
    const state = reducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set loading to true when loadingCityWeather action is dispatched', () => {
    const action = CityWeatherActions.loadCityWeather({data: 'New York'});
    const state = reducer(initialState, action);

    expect(state.loading).toBeTrue();
  });

  it('should set loading to false and update data on loadCityWeatherSuccess action', () => {
    const weatherData: Weather = {
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
    const action = CityWeatherActions.loadCityWeatherSuccess({ data: weatherData });
    const state = reducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.data).toBe(weatherData);
  });

  it('should set loading to false and update error on loadCityWeatherFailure action', () => {
    const error = 'An error occurred';
    const action = CityWeatherActions.loadCityWeatherFailure({ error });
    const state = reducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.error).toBe(error);
  });

  it('should update loadedCityName on saveLoadedCityName action', () => {
    const loadedCityName = 'London';
    const action = CityWeatherActions.saveLoadedCityName({ data: loadedCityName });
    const state = reducer(initialState, action);

    expect(state.loadedCityName).toBe(loadedCityName);
  });
});
