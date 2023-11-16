import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Enrollment } from 'src/app/models/enrollment.model';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { EnrollmentsService } from 'src/app/services/enrollments/enrollments.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-delete-enroll-modal',
  templateUrl: './delete-enroll-modal.component.html',
  styleUrls: ['./delete-enroll-modal.component.sass']
})
export class DeleteEnrollModalComponent {

  loading: boolean = false;

  deleteEnrollData: Enrollment = this.sessionData.getData('currentDeleteEnroll');

  courseName: string = this.deleteEnrollData.course_details.course_name;
  studentName: string = this.deleteEnrollData.student_details.student_full_name;

  isError: boolean = false;


  constructor(private loadingService: LoadingService, private store: Store, private modalService: ModalService, private router: Router, private sessionData: SessionDataService, private enrollmentService: EnrollmentsService){

  }


  ngOnInit(){


    this.loadingService.loading$.subscribe(loading => this.loading = loading);
  }

  closeModal(){
    this.modalService.toggleDeleteEnrollModal();
  }


  confirmDelete(){

    console.log(this.sessionData.getData('currentDeleteEnroll'));
    this.enrollmentService.deleteEnrollment(this.deleteEnrollData.enrollment_id).subscribe(
      response => {
        console.log(response);
        this.modalService.toggleDeleteEnrollModal();
        this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/details']);
        });
      },
      error => {
        this.isError = true;
        console.log(error);
      }
    )


  }



}
