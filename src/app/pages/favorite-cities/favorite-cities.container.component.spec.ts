import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteCitiesContainerComponent } from './favorite-cities.container.component';


describe('FavoriteCitiesContainerComponent', () => {
  let component: FavoriteCitiesContainerComponent;
  let fixture: ComponentFixture<FavoriteCitiesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteCitiesContainerComponent]
    });
    fixture = TestBed.createComponent(FavoriteCitiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
