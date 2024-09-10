import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassCodeComponent } from './forgotpass-code.component';

describe('ForgotpassCodeComponent', () => {
  let component: ForgotpassCodeComponent;
  let fixture: ComponentFixture<ForgotpassCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpassCodeComponent]
    });
    fixture = TestBed.createComponent(ForgotpassCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
