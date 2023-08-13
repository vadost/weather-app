import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FavoriteCity } from '../../models/city.interface';
import { getFavoriteCities } from '../../store/cities/selectors/favorite-cities.selectors';
import { FavoriteCitiesActions } from '../../store/cities/actions/favorite-cities.actions';

@Component({
  selector: 'app-favorite-cities-container',
  template: `
    <app-favorite-cities [favoriteCities]="favoriteCities$ | async"
                         (removeFavoriteCity)="removeFavoriteCity($event)">></app-favorite-cities>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteCitiesContainerComponent {
  favoriteCities$: Observable<FavoriteCity>;

  constructor(private store: Store) {
    this.favoriteCities$ = this.store.pipe(select(getFavoriteCities));
  }

  removeFavoriteCity(cityName: string) {
    this.store.dispatch(FavoriteCitiesActions.removeFavoriteCity({data: cityName}));
  }
}
