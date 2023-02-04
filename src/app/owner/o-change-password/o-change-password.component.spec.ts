import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OChangePasswordComponent } from './o-change-password.component';

describe('OChangePasswordComponent', () => {
  let component: OChangePasswordComponent;
  let fixture: ComponentFixture<OChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
