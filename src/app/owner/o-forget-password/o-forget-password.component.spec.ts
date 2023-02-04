import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OForgetPasswordComponent } from './o-forget-password.component';

describe('OForgetPasswordComponent', () => {
  let component: OForgetPasswordComponent;
  let fixture: ComponentFixture<OForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OForgetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
