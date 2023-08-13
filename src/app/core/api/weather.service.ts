import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Weather } from '../../models/weather.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string;
  private apiKey: string;
  constructor(private apiService: ApiService) {
    this.baseUrl = environment.baseWeatherApiUrl;
    this.apiKey = environment.weatherApiKey;
  }

  getCityWeather(cityName: string): Observable<Weather> {
    let params = new HttpParams();
    params = params.append('q', cityName);
    params = params.append('appid', this.apiKey);
    params = params.append('units', 'metric');
    return this.apiService.get(this.baseUrl + 'weather', params);
  }

  getCityForecast(cityName: string) {
    let params = new HttpParams();
    params = params.append('q', cityName);
    params = params.append('appid', this.apiKey);
    params = params.append('units', 'metric');
    return this.apiService.get(this.baseUrl + 'forecast', params);
  }
}
