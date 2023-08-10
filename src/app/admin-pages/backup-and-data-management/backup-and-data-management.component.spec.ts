import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupAndDataManagementComponent } from './backup-and-data-management.component';

describe('BackupAndDataManagementComponent', () => {
  let component: BackupAndDataManagementComponent;
  let fixture: ComponentFixture<BackupAndDataManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupAndDataManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupAndDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
