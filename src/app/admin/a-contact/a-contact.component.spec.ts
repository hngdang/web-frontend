import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AContactComponent } from './a-contact.component';

describe('AContactComponent', () => {
  let component: AContactComponent;
  let fixture: ComponentFixture<AContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
