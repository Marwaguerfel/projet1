import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercourComponent } from './headercour.component';

describe('HeadercourComponent', () => {
  let component: HeadercourComponent;
  let fixture: ComponentFixture<HeadercourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadercourComponent]
    });
    fixture = TestBed.createComponent(HeadercourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
