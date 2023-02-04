import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODetailComponent } from './o-detail.component';

describe('ODetailComponent', () => {
  let component: ODetailComponent;
  let fixture: ComponentFixture<ODetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ODetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
