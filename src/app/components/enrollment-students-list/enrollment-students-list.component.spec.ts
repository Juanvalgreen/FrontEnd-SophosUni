import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentStudentsListComponent } from './enrollment-students-list.component';

describe('EnrollmentStudentsListComponent', () => {
  let component: EnrollmentStudentsListComponent;
  let fixture: ComponentFixture<EnrollmentStudentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentStudentsListComponent]
    });
    fixture = TestBed.createComponent(EnrollmentStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
