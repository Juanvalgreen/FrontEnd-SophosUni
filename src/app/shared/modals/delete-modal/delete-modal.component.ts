import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.sass']
})
export class DeleteModalComponent {

  isError: boolean = false;

  loading: boolean = false;

  isAvailable: boolean = true;
  dataDetail: any = this.sessionData.getData('currentDetailsData');
  currentDetailName: string = '';

  constructor(private loadingService: LoadingService, private store: Store, private modalService: ModalService, private router: Router, private sessionData: SessionDataService, private courseService: CoursesService, private studentService:StudentsService, private teacherService: TeachersService){

  }

  ngOnInit(){


    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    console.log(this.dataDetail);
    switch(this.dataDetail.typeData){
      case 'Estudiante':
        this.currentDetailName = this.dataDetail.currentData.student_full_name;
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
    this.modalService.toggleDeleteModal();
  }

  confirmDelete(){

    switch(this.dataDetail.typeData){

      case 'Estudiante':
        this.studentService.deleteStudent(this.dataDetail.currentData.student_id).subscribe(
          data => {
            console.log(data);
            this.router.navigateByUrl('/list');
            this.modalService.toggleDeleteModal();
          },error => {
            this.isError = true;
            console.log(error);
          }
        );
        break;

      case 'Curso':
        this.courseService.deleteCourse(this.dataDetail.currentData.course_id).subscribe(
          data => {
            console.log(data);
            this.router.navigateByUrl('/list');
            this.modalService.toggleDeleteModal();
          },error => {
            this.isError = true;

            console.log(error);
          }
        );
        break;

      case 'Profesor':
        this.teacherService.deleteTeacher(this.dataDetail.currentData.teacher_id).subscribe(
          data => {
            console.log(data);
            this.router.navigateByUrl('/list');
            this.modalService.toggleDeleteModal();
          },error => {
            this.isError = true;

            console.log(error);
          }
        );
        break;
    }

  }

}
