import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APropertyComponent } from './a-property.component';

describe('APropertyComponent', () => {
  let component: APropertyComponent;
  let fixture: ComponentFixture<APropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
