import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesListComponent } from './teacher-courses-list.component';

describe('TeacherCoursesListComponent', () => {
  let component: TeacherCoursesListComponent;
  let fixture: ComponentFixture<TeacherCoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherCoursesListComponent]
    });
    fixture = TestBed.createComponent(TeacherCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
