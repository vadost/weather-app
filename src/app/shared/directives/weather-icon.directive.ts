import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appWeatherIcon]',
})
export class WeatherIconDirective implements AfterViewInit, OnChanges {
  @Input() iconCode: string;
  iconCDNUrl = 'http://openweathermap.org/img/wn/'

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['iconCode'] && this.iconCode) {
      this.setIcon();
    }
  }

  ngAfterViewInit() {
    this.setIcon();
  }

  setIcon() {
    const iconUrl = this.iconCDNUrl + this.iconCode +'.png';
    this.el.nativeElement.setAttribute('src', iconUrl);
  }

}
