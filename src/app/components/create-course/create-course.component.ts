import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { students } from 'src/app/models/students.model';
import { teachers } from 'src/app/models/teachers.model';
import { courseRequest } from 'src/app/services/courses/courseRequest';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.sass']
})
export class CreateCourseComponent {

  loading: boolean = false;

  allTeachers: teachers[];
  allStudents: students[];

  isError: boolean = false;

  createCourseForm = this.formBuilder.group({
    course_name: ['', [Validators.required]],
    amount_credits: [,Validators.required],
    available_places: [,Validators.required],
    course_student_monitor_id: [],
    teacher_id: []
  });

  constructor(private loadingService: LoadingService, private router:Router, private teachersService: TeachersService, private studentsService: StudentsService, private courseService: CoursesService, private formBuilder:FormBuilder){
    this.allTeachers =[ ];
    this.allStudents = [ ];
  }

  ngOnInit() {




    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    this.studentsService.getAllStudents().subscribe(
      data => {
        this.allStudents = data;
      },
      error => {
        console.log(error);
        this.isError = true;
    });

    this.teachersService.getAllTeachers().subscribe(
      data => {
        this.allTeachers = data;
      },
      error => {
        console.log(error);
        this.isError = true;
    });

  }

  onSubmit() {
    if (this.createCourseForm.valid) {
      const formData = this.createCourseForm.value as unknown as courseRequest;

      this.courseService.addNewCourse(formData as courseRequest).subscribe(
        (response:any ) => {

          this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/list']);
          });

        },
        error => {

          console.error(error);
          this.isError = true;
          this.createCourseForm.reset();

        }
      );
    }
  }


}
