import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ORegisterComponent } from './o-register.component';

describe('ORegisterComponent', () => {
  let component: ORegisterComponent;
  let fixture: ComponentFixture<ORegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ORegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ORegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
