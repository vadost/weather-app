import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges, OnDestroy, SimpleChanges,
  ViewChild
} from '@angular/core';
import { DatePipe } from '@angular/common';

declare var Chart: any;
@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherChartComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('lineChartCanvas') lineChartCanvas: ElementRef;
  @Input() chartData: any;
  private chart: any;

  constructor(private datePipe: DatePipe) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['chartData'] && this.chartData && this.lineChartCanvas) {
      this.createLineChart();
    }
  }

  ngAfterViewInit(): void {
    if (this.chartData) {
      this.createLineChart();
    }
  }

  createLineChart(): void {
    this.destroyChart();
    const chartCanvas = this.lineChartCanvas.nativeElement;
    const ctx = chartCanvas.getContext('2d');
    const transformedLabels = this.chartData.dates.map((date: Date) => this.datePipe.transform(date,'MMM d'));

    const lineChartData = {
      labels: transformedLabels,
      datasets: [
        {
          label: 'Max Temperature',
          data: this.chartData.maxTemps,
          borderColor: 'red',
          fill: false
        },
        {
          label: 'Min Temperature',
          data: this.chartData.minTemps,
          borderColor: 'blue',
          fill: false
        }
      ],
    };

    const lineChartOptions = {
      responsive: true,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (tooltipItem: any) => {
              const index = tooltipItem.dataIndex;
              const weatherDescription = this.chartData.weatherDescriptions[index];
              const maxTemp = tooltipItem.dataset.data[index];
              const minTemp = tooltipItem.dataset.data[index];
              const temp = tooltipItem.dataset.label === 'Max Temperature' ? 'Max' : 'Min';
              const tempValue = tooltipItem.dataset.label === 'Max Temperature' ? maxTemp : minTemp;

              return `${weatherDescription}: ${temp} ${tempValue}°C`;
            }
          }
        }
      }
    };

    this.chart = new Chart(ctx, {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions
    });
  }

  destroyChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }
}
