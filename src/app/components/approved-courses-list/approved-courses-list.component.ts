import { Component } from '@angular/core';
import { ApprovedCourse } from 'src/app/models/approvedCourse.model';
import { ApprovedCoursesService } from 'src/app/services/approved-courses/approved-courses.service';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-approved-courses-list',
  templateUrl: './approved-courses-list.component.html',
  styleUrls: ['./approved-courses-list.component.sass']
})
export class ApprovedCoursesListComponent {

  loading: boolean = false;

  approvedCourses: ApprovedCourse[];

  isError: boolean = false;


  constructor(private loadingService: LoadingService, private approvedService :ApprovedCoursesService, private detailService: DetailsDataService ){

    this.approvedCourses = [];

  }



  ngOnInit(){


    this.loadingService.loading$.subscribe(loading => this.loading = loading);

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
