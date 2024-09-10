import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCategoriesComponent } from './slider-categories.component';

describe('SliderCategoriesComponent', () => {
  let component: SliderCategoriesComponent;
  let fixture: ComponentFixture<SliderCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderCategoriesComponent]
    });
    fixture = TestBed.createComponent(SliderCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
