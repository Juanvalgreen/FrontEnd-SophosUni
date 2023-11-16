import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { students } from 'src/app/models/students.model';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { ListingService } from 'src/app/services/listing/listing.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.sass']
})
export class StudentsListComponent implements OnInit {

  searchBar = this.formBuilder.group({
    search: [''],
  })

  loading: boolean = false;

  isStudentsPage: Boolean;

  allStudents: students[];
  currentStudentList: students[] = [];
  isError: boolean = false;


  constructor(private loadingService: LoadingService, private formBuilder:FormBuilder, private studentsService: StudentsService, private listingService:ListingService, private router:Router, private detailService:DetailsDataService, private sessionData:SessionDataService) {
    this.allStudents = [   ];
    this.isStudentsPage = false;
  }

  ngOnInit() {


    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    this.isStudentsPage = this.router.url.includes('list');

    this.studentsService.getAllStudents().subscribe(
      data => {
        this.allStudents = data;
        this.currentStudentList = this.allStudents;
      },
      error => {
        console.log(error);
        this.isError = true;
    });

    this.searchBar?.get('search')?.valueChanges.subscribe((searchValue) => {
      if(searchValue == ''){
        this.currentStudentList = this.allStudents;
      }
      // Llamar al método buscar del servicio courses con el valor de búsqueda
      this.studentsService.searchStudentsByName(searchValue as string).subscribe(
        data => {
          this.currentStudentList = data;
        },error => {
          console.log(error);
        }
      )
    });

  }


  redirectToList(){
    this.sessionData.storeData('currentIndicateList','Estudiantes');
    this.listingService.componentIndicate = 'Estudiantes';
    this.router.navigateByUrl('/list');

  }

  asignDetailData(student: students){

    this.detailService.detailsData= new Object({
      currentData: student,
      typeData: 'Estudiante'
    });

    this.sessionData.storeData('currentDetailsData',this.detailService.detailsData);

    this.router.navigateByUrl('/details');

  }

  sortStudents(property: string){
    console.log(this.allStudents);
    if(property == 'student_id'){
      this.currentStudentList = this.allStudents.sort((a,b) => a[property] - b[property]);}
    else{
      this.currentStudentList = this.allStudents.sort((a, b) => {
        return a[property as keyof students] < b[property as keyof students] ? -1 : a[property as keyof students] > b[property as keyof students] ? 1 : 0;
      });
    }
  }


}
