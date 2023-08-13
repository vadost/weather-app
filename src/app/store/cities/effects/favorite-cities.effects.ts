import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, first } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { FavoriteCitiesActions } from '../actions/favorite-cities.actions';
import { LocalStorageService } from '../../../core/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { getCityWeather } from '../../weather/selectors/city-weather.selectors';
import { getCityForecast } from '../../weather/selectors/city-forecast.selectors';


@Injectable()
export class FavoriteCitiesEffects {

  loadFavoriteCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FavoriteCitiesActions.loadFavoriteCities),
      map(() => {
          let data = this.localStorageService.getItem('savedFavoriteCities') || {};
          return FavoriteCitiesActions.loadFavoriteCitiesSuccess({ data });
        }
      )
    );
  });

  saveFavoriteCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteCitiesActions.saveFavoriteCity),
      mergeMap(payload =>
        combineLatest([
          this.store.pipe(select(getCityWeather)),
          this.store.pipe(select(getCityForecast)),
        ]).pipe(
          first(),
          map(([weather, forecast]) => {
            const favoriteCities = this.localStorageService.getItem('savedFavoriteCities') || {}
            favoriteCities[payload.data] = {
              weather,
              forecast,
            }
            this.localStorageService.setItem('savedFavoriteCities', favoriteCities);
            this.snackBar.open('City successfully added to favorite', 'Success', {duration: 3000});
            return FavoriteCitiesActions.loadFavoriteCities();
          })
        )
      )
    )
  );

  deleteCityFromFavorite$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FavoriteCitiesActions.removeFavoriteCity),
      map((payload) => {
          const favoriteCities = this.localStorageService.getItem('savedFavoriteCities') || {};
          delete favoriteCities[payload.data];
          this.localStorageService.setItem('savedFavoriteCities', favoriteCities);
          return FavoriteCitiesActions.loadFavoriteCitiesSuccess({ data: favoriteCities });
        }
      )
    );
  });


  constructor(private actions$: Actions,
              private store: Store,
              private snackBar: MatSnackBar,
              private localStorageService: LocalStorageService) {}
}
