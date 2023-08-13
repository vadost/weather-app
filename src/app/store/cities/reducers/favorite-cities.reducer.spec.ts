import { reducer, initialState } from './favorite-cities.reducer';
import { FavoriteCitiesActions } from '../actions/favorite-cities.actions';
import { FavoriteCity } from '../../../models/city.interface';
import { Weather } from '../../../models/weather.interface';

describe('Favorite Cities Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any; // Empty action
    const state = reducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set loading to true when loadFavoriteCities action is dispatched', () => {
    const action = FavoriteCitiesActions.loadFavoriteCities();
    const state = reducer(initialState, action);

    expect(state.loading).toBeTrue();
  });

  it('should set loading to false and update data on loadFavoriteCitiesSuccess action', () => {
    const favoriteCitiesData: FavoriteCity = {
      "new york": {
        "weather": {
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "main": {
            "temp": 28.02,
            "feels_like": 30.31,
            "temp_min": 25.96,
            "temp_max": 30.29,
            "pressure": 1011,
            "humidity": 67
          },
          "name": "New York",
        } as Weather,
        "forecast": {
          dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
          maxTemps: [31.73, 30.87, 30.55, 29.38, 29.56, 27.16],
          minTemps: [28.83, 23.63, 24.03, 22.37, 23.85, 24.14],
          weatherDescriptions: ["scattered clouds", "few clouds", "broken clouds", "overcast clouds", "broken clouds", "scattered clouds"]
        }
      },
      "kiev": {
        weather: {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "main": {
            "temp": 28.55,
            "feels_like": 28.5,
            "temp_min": 26.48,
            "temp_max": 28.73,
            "pressure": 1017,
            "humidity": 44
          },
          "name": "Kyiv",
        } as Weather,
        forecast: {
          dates: ["2023-08-13", "2023-08-14", "2023-08-15", "2023-08-16", "2023-08-17", "2023-08-18"],
          maxTemps: [28.55, 31.6, 34.04, 32.56, 32.16, 32.21],
          minTemps: [19.93, 17.8, 20.49, 20.83, 19.51, 19.51],
          weatherDescriptions: ["clear sky", "clear sky", "scattered clouds", "clear sky", "clear sky", "clear sky"]
        }
      }
    };
    const action = FavoriteCitiesActions.loadFavoriteCitiesSuccess({ data: favoriteCitiesData });
    const state = reducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.data).toBe(favoriteCitiesData);
  });

  it('should set loading to false and update error on loadFavoriteCitiesFailure action', () => {
    const error = 'An error occurred';
    const action = FavoriteCitiesActions.loadFavoriteCitiesFailure({ error });
    const state = reducer(initialState, action);

    expect(state.loading).toBeFalse();
    expect(state.error).toBe(error);
  });
});
