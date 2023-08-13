import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { FavoriteCitiesActions } from '../../../store/cities/actions/favorite-cities.actions';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    this.store.dispatch(FavoriteCitiesActions.loadFavoriteCities());
    return of(true);
  }

}
