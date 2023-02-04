import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHomeComponent } from './o-home.component';

describe('OHomeComponent', () => {
  let component: OHomeComponent;
  let fixture: ComponentFixture<OHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
