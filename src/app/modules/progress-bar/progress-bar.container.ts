import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getCityWeatherLoading } from '../../store/weather/selectors/city-weather.selectors';
import { getCityForecastLoading } from '../../store/weather/selectors/city-forecast.selectors';

@Component({
  selector: 'app-progress-bar-container',
  template: `
    <mat-progress-bar mode="indeterminate" class="progress"
                      *ngIf="(allLoadingValues$ | async)?.includes(true)"></mat-progress-bar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarContainerComponent implements OnInit {
  allLoadingValues$: Observable<boolean[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.allLoadingValues$ = combineLatest([
      this.store.pipe(select(getCityWeatherLoading)),
      this.store.pipe(select(getCityForecastLoading))
      ]
    );
  }
}
