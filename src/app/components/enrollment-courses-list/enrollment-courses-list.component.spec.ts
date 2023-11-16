import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentCoursesListComponent } from './enrollment-courses-list.component';

describe('EnrollmentCoursesListComponent', () => {
  let component: EnrollmentCoursesListComponent;
  let fixture: ComponentFixture<EnrollmentCoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentCoursesListComponent]
    });
    fixture = TestBed.createComponent(EnrollmentCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
