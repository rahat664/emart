import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndAccessControlComponent } from './security-and-access-control.component';

describe('SecurityAndAccessControlComponent', () => {
  let component: SecurityAndAccessControlComponent;
  let fixture: ComponentFixture<SecurityAndAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAndAccessControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityAndAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
