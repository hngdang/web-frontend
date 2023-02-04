import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OInformationComponent } from './o-information.component';

describe('OInformationComponent', () => {
  let component: OInformationComponent;
  let fixture: ComponentFixture<OInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
