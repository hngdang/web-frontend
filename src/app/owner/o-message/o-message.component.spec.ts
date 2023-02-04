import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMessageComponent } from './o-message.component';

describe('OMessageComponent', () => {
  let component: OMessageComponent;
  let fixture: ComponentFixture<OMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
