import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges,
  Output, SimpleChanges,
} from '@angular/core';
import { Forecast, Weather } from '../../../models/weather.interface';
import { FavoriteCity } from '../../../models/city.interface';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherComponent implements OnChanges {
  @Input() cityWeather: Weather;
  @Input() cityWeatherLoading: boolean;
  @Input() cityForecast: Forecast;
  @Input() cityForecastLoading: boolean;
  @Input() loadedCityName: string;
  @Input() favoriteCities: FavoriteCity;
  @Output() loadWeather: EventEmitter<string> = new EventEmitter();
  @Output() saveFavoriteCity: EventEmitter<string> = new EventEmitter();
  cityName = '';

  onLoadWeather() {
    const city = this.cityName.trim().toLowerCase();
    if (city !== '') {
      this.loadWeather.emit(city);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['loadedCityName'] && this.loadedCityName) {
      this.cityName = this.loadedCityName;
    }
    console.log('favoriteCities', this.favoriteCities);
  }

}
