import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { FavoriteCity } from '../../../models/city.interface';

export const FavoriteCitiesActions = createActionGroup({
  source: 'FavoriteCities',
  events: {
    'Load FavoriteCities': emptyProps(),
    'Load FavoriteCities Success': props<{ data: FavoriteCity }>(),
    'Load FavoriteCities Failure': props<{ error: unknown }>(),
    'Save FavoriteCity': props<{ data: string }>(),
    'Remove FavoriteCity': props<{ data: string }>(),
  }
});
