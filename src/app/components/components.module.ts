import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { StudentsListComponent } from '../components/students-list/students-list.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
import { TeachersListComponent } from '../components/teachers-list/teachers-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ApprovedCoursesListComponent } from './approved-courses-list/approved-courses-list.component';
import { EnrollmentCoursesListComponent } from './enrollment-courses-list/enrollment-courses-list.component';
import { EnrollmentStudentsListComponent } from './enrollment-students-list/enrollment-students-list.component';
import { PrerequistesCoursesListComponent } from './prerequistes-courses-list/prerequistes-courses-list.component';
import { TeacherCoursesListComponent } from './teacher-courses-list/teacher-courses-list.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    StudentsListComponent,
    CoursesListComponent,
    TeachersListComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    CreateCourseComponent,
    ApprovedCoursesListComponent,
    EnrollmentCoursesListComponent,
    EnrollmentStudentsListComponent,
    PrerequistesCoursesListComponent,
    TeacherCoursesListComponent


  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentsListComponent,
    CoursesListComponent,
    TeachersListComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    CreateCourseComponent,
    ApprovedCoursesListComponent,
    EnrollmentCoursesListComponent,
    EnrollmentStudentsListComponent,
    PrerequistesCoursesListComponent,
    TeacherCoursesListComponent,
  ]
})
export class ComponentsModule { }
