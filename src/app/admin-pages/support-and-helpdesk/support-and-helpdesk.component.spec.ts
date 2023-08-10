import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAndHelpdeskComponent } from './support-and-helpdesk.component';

describe('SupportAndHelpdeskComponent', () => {
  let component: SupportAndHelpdeskComponent;
  let fixture: ComponentFixture<SupportAndHelpdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportAndHelpdeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportAndHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
