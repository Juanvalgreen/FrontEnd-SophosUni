import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses.model';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';

@Component({
  selector: 'app-teacher-courses-list',
  templateUrl: './teacher-courses-list.component.html',
  styleUrls: ['./teacher-courses-list.component.sass']
})
export class TeacherCoursesListComponent {

  isError: boolean = false;

  teacherCourses: Courses[]

  constructor(private courseService :CoursesService, private detailService: DetailsDataService, private router: Router  ){

    this.teacherCourses = [];

  }



  ngOnInit(){
    // student: students = null;

    this.courseService.getAllCoursesByTeacherId(this.detailService.detailsData.currentData.teacher_id).subscribe(
      data => {
        this.teacherCourses = data;
      },
      error => {
        console.log(error);
        this.isError = true;
    });
  }


}
