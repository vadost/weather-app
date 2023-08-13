import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FavoriteCity } from '../../../models/city.interface';

@Component({
  selector: 'app-favorite-cities',
  templateUrl: './favorite-cities.component.html',
  styleUrls: ['./favorite-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteCitiesComponent {
  Obj = Object;
  @Input() favoriteCities: FavoriteCity;
  @Output() removeFavoriteCity: EventEmitter<string> = new EventEmitter();

}
