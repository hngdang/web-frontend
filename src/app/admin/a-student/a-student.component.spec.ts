import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStudentComponent } from './a-student.component';

describe('AStudentComponent', () => {
  let component: AStudentComponent;
  let fixture: ComponentFixture<AStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
