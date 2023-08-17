import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSliderComponent } from './price-slider.component';

describe('PriceSliderComponent', () => {
  let component: PriceSliderComponent;
  let fixture: ComponentFixture<PriceSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceSliderComponent]
    });
    fixture = TestBed.createComponent(PriceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
