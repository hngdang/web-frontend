import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OManagementComponent } from './o-management.component';

describe('OManagementComponent', () => {
  let component: OManagementComponent;
  let fixture: ComponentFixture<OManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
