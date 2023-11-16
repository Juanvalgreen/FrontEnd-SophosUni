import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollment } from 'src/app/models/enrollment.model';
import { students } from 'src/app/models/students.model';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { EnrollmentsService } from 'src/app/services/enrollments/enrollments.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-enrollment-students-list',
  templateUrl: './enrollment-students-list.component.html',
  styleUrls: ['./enrollment-students-list.component.sass']
})
export class EnrollmentStudentsListComponent {

  loading: boolean = false;

  enrollmentStudents: Enrollment[]

  constructor(private loadingService: LoadingService, private router: Router , private dataSession: SessionDataService, private enrollemntsService :EnrollmentsService, private detailService: DetailsDataService, private modalService: ModalService){

    this.enrollmentStudents = [];

  }



  ngOnInit(){
    // student: students = null;

    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    this.enrollemntsService.getAllEnrollmentsByCourseId(this.detailService.detailsData.currentData.course_id).subscribe(
      data => {
        console.log(data);
        this.enrollmentStudents = data;
        this.detailService.updateAmountEnrolls(this.enrollmentStudents.length);
      },
      error => {
        console.log(error);
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
