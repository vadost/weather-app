import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityWeatherContainerComponent } from './city-weather.container.component';


describe('CityWeatherContainerCityWeatherContainerTs', () => {
  let component: CityWeatherContainerComponent;
  let fixture: ComponentFixture<CityWeatherContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherContainerComponent]
    });
    fixture = TestBed.createComponent(CityWeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
