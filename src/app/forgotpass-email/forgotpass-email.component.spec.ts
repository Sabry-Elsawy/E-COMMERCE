import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassEmailComponent } from './forgotpass-email.component';

describe('ForgotpassEmailComponent', () => {
  let component: ForgotpassEmailComponent;
  let fixture: ComponentFixture<ForgotpassEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpassEmailComponent]
    });
    fixture = TestBed.createComponent(ForgotpassEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
