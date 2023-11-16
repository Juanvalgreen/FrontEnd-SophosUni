import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { students } from 'src/app/models/students.model';
import { teachers } from 'src/app/models/teachers.model';
import { courseRequest } from 'src/app/services/courses/courseRequest';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { studentRequest } from 'src/app/services/students/studentRequest';
import { StudentsService } from 'src/app/services/students/students.service';
import { teacherRequest } from 'src/app/services/teachers/teacherRequest';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.sass']
})
export class EditModalComponent {

  isError: boolean = false;

  loading: boolean = false;

  allTeachers: teachers[] = [];
  allStudents: students[] = [];

  dataDetail: any = this.sessionData.getData('currentDetailsData');

  editStudentForm = this.formBuilder.group({
    student_id: [this.dataDetail.currentData.student_id],
    student_full_name: [this.dataDetail.currentData.student_full_name, [Validators.required]],
    faculty: [this.dataDetail.currentData.faculty,Validators.required],
    available_credits: [this.dataDetail.currentData.available_credits,Validators.required],
    student_email: [this.dataDetail.currentData.student_email],
    student_phone: [this.dataDetail.currentData.student_phone],
    enrolled_credits: [0]
  });

  editTeacherForm = this.formBuilder.group({
    teacher_id:[this.dataDetail.currentData.teacher_id],
    teacher_full_name: [this.dataDetail.currentData.teacher_full_name, [Validators.required]],
    max_degree: [this.dataDetail.currentData.max_degree,Validators.required],
    experience_years: [this.dataDetail.currentData.experience_years,Validators.required]
  });

  editCourseForm = this.formBuilder.group({
    course_id: [this.dataDetail.currentData.course_id],
    course_name: [this.dataDetail.currentData.course_name, [Validators.required]],
    amount_credits: [this.dataDetail.currentData.amount_credits,Validators.required],
    available_places: [this.dataDetail.currentData.available_places,Validators.required],
    course_student_monitor_id: [this.dataDetail.currentData.student_monitor_details == null ? null : this.dataDetail.currentData.student_monitor_details.student_id  ],
    teacher_id: [this.dataDetail.currentData.teacher_details  == null ? null : this.dataDetail.currentData.teacher_details.teacher_id]
  });


  currentDetailName: string = '';

  constructor(private loadingService: LoadingService, private store: Store, private modalService: ModalService, private router: Router, private sessionData: SessionDataService, private courseService: CoursesService, private studentsService:StudentsService, private teachersService: TeachersService, private formBuilder: FormBuilder){

  }

  ngOnInit(){

    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    if(this.dataDetail.typeData == 'Curso'){
      this.studentsService.getAllStudents().subscribe(
        data => {
          this.allStudents = data;
        },
        error => {
          this.isError =true;
          console.log(error);
      });

      this.teachersService.getAllTeachers().subscribe(
        data => {
          this.allTeachers = data;
        },
        error => {
          this.isError =true;

          console.log(error);
      });
    }

    switch(this.dataDetail.typeData){
      case 'Estudiante':
        this.currentDetailName = this.dataDetail.currentData.student_name;
        break;
      case 'Curso':
        this.currentDetailName = this.dataDetail.currentData.course_name;
        break;
      case 'Profesor':
        this.currentDetailName = this.dataDetail.currentData.teacher_full_name;
        break;
    }
  }


  closeModal(){
    this.modalService.toggleEditModal();
  }


  confirmEdit(){

    switch(this.dataDetail.typeData){
      case 'Estudiante':
        if(this.editStudentForm.valid){

          const studentDataEdit = this.editStudentForm.value;

          this.studentsService.updateStudent( studentDataEdit as unknown as studentRequest).subscribe(
            response => {
              console.log(response);

              this.sessionData.storeData('currentDetailsData',new Object({
                currentData: studentDataEdit,
                typeData: 'Estudiante'
              }));

              this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/details']);
              });
              this.modalService.toggleEditModal();

            }, error => {
              this.isError =true;

              console.log(error);
            }
          );



        }
        break;
      case 'Curso':
        if(this.editCourseForm.valid){

          const courseDataEdit = this.editCourseForm.value;

          this.courseService.updateCourse( courseDataEdit as unknown as courseRequest).subscribe(
            response => {

              console.log(response)

              this.sessionData.storeData('currentDetailsData',new Object({
                currentData: courseDataEdit,
                typeData: 'Curso'
              }));

              this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/details']);
              });
              this.modalService.toggleEditModal();

            }, error => {
              this.isError =true;
              console.log(error);
            }
          );


        }
        break;
      case 'Profesor':
        if(this.editTeacherForm.valid){

          const teacherDataEdit = this.editTeacherForm.value;

          this.teachersService.updateTeacher( teacherDataEdit as unknown as teacherRequest).subscribe(
            response => {
              console.log(response);

              this.sessionData.storeData('currentDetailsData',new Object({
                currentData: teacherDataEdit,
                typeData: 'Profesor'
              }));

              this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/details']);
              });
              this.modalService.toggleEditModal();

            }, error => {
              this.isError =true;
              console.log(error);
            }
          );

        }
        break;
    }

  }



}
