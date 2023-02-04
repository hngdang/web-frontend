import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AArticleComponent } from './a-article.component';

describe('AArticleComponent', () => {
  let component: AArticleComponent;
  let fixture: ComponentFixture<AArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
