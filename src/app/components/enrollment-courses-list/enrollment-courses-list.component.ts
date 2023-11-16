import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses.model';
import { Enrollment } from 'src/app/models/enrollment.model';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { EnrollmentsService } from 'src/app/services/enrollments/enrollments.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-enrollment-courses-list',
  templateUrl: './enrollment-courses-list.component.html',
  styleUrls: ['./enrollment-courses-list.component.sass']
})
export class EnrollmentCoursesListComponent {

  loading: boolean = false;



  isError: boolean = false;


  enrollmentCourses: Enrollment[]

  constructor(private loadingService: LoadingService, private router: Router, private dataSession: SessionDataService, private enrollemntsService :EnrollmentsService, private detailService: DetailsDataService, private modalService: ModalService){

    this.enrollmentCourses = [];

  }




  ngOnInit(){
    // student: students = null;
    this.loadingService.loading$.subscribe(loading => this.loading = loading);


    this.enrollemntsService.getAllEnrollmentsByStudentId(this.detailService.detailsData.currentData.student_id).subscribe(
      data => {
        this.enrollmentCourses = data;
        this.detailService.updateAmountEnrolls(this.enrollmentCourses.length);
        console.log(this.enrollmentCourses);
      },
      error => {
        console.log(error);
        this.isError = true;
    });
  }


  openAddNewEnrollModal(){
    this.modalService.toggleNewEnrollModal();
  }


  openDeleteEnrollModal(enrollData: Enrollment){
    this.modalService.toggleDeleteEnrollModal();

    this.dataSession.storeData('currentDeleteEnroll', enrollData);
  }






}
