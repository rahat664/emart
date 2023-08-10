import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAndAnalysisComponent } from './reports-and-analysis.component';

describe('ReportsAndAnalysisComponent', () => {
  let component: ReportsAndAnalysisComponent;
  let fixture: ComponentFixture<ReportsAndAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsAndAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAndAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
