import { Component } from '@angular/core';
import { ApprovedCourse } from 'src/app/models/approvedCourse.model';
import { ApprovedCoursesService } from 'src/app/services/approved-courses/approved-courses.service';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';

@Component({
  selector: 'app-approved-courses-list',
  templateUrl: './approved-courses-list.component.html',
  styleUrls: ['./approved-courses-list.component.sass']
})
export class ApprovedCoursesListComponent {


  approvedCourses: ApprovedCourse[];

  isError: boolean = false;


  constructor(private approvedService :ApprovedCoursesService, private detailService: DetailsDataService ){

    this.approvedCourses = [];

  }



  ngOnInit(){
    // student: students = null;

    this.approvedService.getAllEnrollmentsByStudentId(this.detailService.detailsData.currentData.student_id).subscribe(
      data => {
        this.approvedCourses = data;
      },
      error => {
        console.log(error);
        this.isError = true;
    });
  }

}
