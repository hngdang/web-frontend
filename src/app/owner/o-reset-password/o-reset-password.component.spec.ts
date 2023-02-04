import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OResetPasswordComponent } from './o-reset-password.component';

describe('OResetPasswordComponent', () => {
  let component: OResetPasswordComponent;
  let fixture: ComponentFixture<OResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
