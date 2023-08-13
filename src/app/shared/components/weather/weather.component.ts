import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Forecast, Weather } from '../../../models/weather.interface';
import { FavoriteCity } from '../../../models/city.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  Obj = Object;
  @Input() mode: string; // search | favorites
  @Input() weather: Weather;
  @Input() forecast: Forecast;
  @Input() loadedCityName: string;
  @Input() favoriteCities: FavoriteCity;
  @Output() saveFavoriteCity: EventEmitter<string> = new EventEmitter();
  @Output() removeFavoriteCity: EventEmitter<void> = new EventEmitter();

}
