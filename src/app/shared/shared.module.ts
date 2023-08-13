import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { material } from './modules/material';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherIconDirective } from './directives/weather-icon.directive';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';

const components = [
  WeatherComponent,
  WeatherChartComponent,
]

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ...material,
]

const directives = [
  WeatherIconDirective
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
    ...directives,
  ]
})
export class SharedModule { }
