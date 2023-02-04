import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPropertyComponent } from './o-property.component';

describe('OPropertyComponent', () => {
  let component: OPropertyComponent;
  let fixture: ComponentFixture<OPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
