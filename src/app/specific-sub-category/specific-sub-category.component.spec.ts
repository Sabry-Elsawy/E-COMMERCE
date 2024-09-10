import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificSubCategoryComponent } from './specific-sub-category.component';

describe('SpecificSubCategoryComponent', () => {
  let component: SpecificSubCategoryComponent;
  let fixture: ComponentFixture<SpecificSubCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificSubCategoryComponent]
    });
    fixture = TestBed.createComponent(SpecificSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
