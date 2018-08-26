import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBowlingScoreComponent } from './calculate-bowling-score.component';

describe('CalculateBowlingScoreComponent', () => {
  let component: CalculateBowlingScoreComponent;
  let fixture: ComponentFixture<CalculateBowlingScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateBowlingScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateBowlingScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
