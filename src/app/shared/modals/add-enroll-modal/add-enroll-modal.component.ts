import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Courses } from 'src/app/models/courses.model';
import { students } from 'src/app/models/students.model';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { enrollmentRequest } from 'src/app/services/enrollments/enrollmentRequest';
import { EnrollmentsService } from 'src/app/services/enrollments/enrollments.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-add-enroll-modal',
  templateUrl: './add-enroll-modal.component.html',
  styleUrls: ['./add-enroll-modal.component.sass']
})
export class AddEnrollModalComponent {

  loading: boolean = false;

  allCourses : Courses[] = [];
  allStudents : students[] = [];

  isAvailable: boolean = true;

  dataDetail: any = this.sessionData.getData('currentDetailsData');

  newEnrollForm = this.formBuilder.group({
    course_id: [this.dataDetail.currentData.course_id == null ? null : this.dataDetail.currentData.course_id, Validators.required],

    student_id: [this.dataDetail.currentData.student_id  == null ? null : this.dataDetail.currentData.student_id, Validators.required]
  });

  constructor(private loadingService: LoadingService, private store: Store, private modalService: ModalService, private router: Router, private sessionData: SessionDataService, private courseService: CoursesService, private studentsService:StudentsService, private enrollService: EnrollmentsService, private formBuilder: FormBuilder){

  }


  ngOnInit(){



    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    this.studentsService.getAllStudents().subscribe(
      data => {
        this.allStudents = data;
      },
      error => {
        console.log(error);
    });

    this.courseService.getAllCourses().subscribe(
      data => {
        this.allCourses = data;
      },
      error => {
        console.log(error);
    });

  }



  closeModal(){

    this.modalService.toggleNewEnrollModal();

  }

  addNewEnroll(){

    if(this.newEnrollForm.valid){

          const currentDate = new Date();
          const formattedDate = currentDate.toISOString().replace('Z', '+00:00');


          const enrollData= new Object({
            student_id: this.newEnrollForm.value.student_id,
            course_id: this.newEnrollForm.value.course_id,
            enrollment_date: formattedDate

          })

          console.log(enrollData);

          this.enrollService.addNewEnrollemnt(enrollData as unknown as enrollmentRequest).subscribe(
            response => {
              console.log(response);
              this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/details']);
              });
              this.modalService.toggleNewEnrollModal();

            }, error => {

              this.isAvailable = false;
              console.log(error);
            }
          )

        }

    }


}
