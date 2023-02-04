import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OLoginComponent } from './o-login.component';

describe('OLoginComponent', () => {
  let component: OLoginComponent;
  let fixture: ComponentFixture<OLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
