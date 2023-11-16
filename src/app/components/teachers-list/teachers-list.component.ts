import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { teachers } from 'src/app/models/teachers.model';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { ListingService } from 'src/app/services/listing/listing.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.sass']
})
export class TeachersListComponent implements OnInit {

  loading: boolean = false;

  isTeachersPage : boolean;
  allTeachers : teachers[];
  currentTeachersList : teachers[] = [];

  isError: boolean = false;

  searchBar = this.formBuilder.group({
    search: [''],
  })


  constructor(private loadingService: LoadingService, private teacherService : TeachersService,private formBuilder:FormBuilder, private listingService:ListingService, private router:Router, private detailService: DetailsDataService, private sessionData:SessionDataService){
    this.allTeachers = [];
    this.isTeachersPage = false;
  }




  ngOnInit() {



    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    this.isTeachersPage = this.router.url.includes('list');

    this.teacherService.getAllTeachers().subscribe(
      data => {
        this.allTeachers = data;
        this.currentTeachersList = this.allTeachers;
      },error => {
        console.log(error);
        this.isError = true;
    });

    this.searchBar?.get('search')?.valueChanges.subscribe((searchValue) => {
      if(searchValue == ''){
        this.currentTeachersList = this.allTeachers;
      }
      // Llamar al método buscar del servicio courses con el valor de búsqueda
      this.teacherService.searchAllTeachersByName(searchValue as string).subscribe(
        data => {
          this.currentTeachersList = data;
        },error => {
          console.log(error);
        }
      )
    });


  }

  redirectToList(){
    this.sessionData.storeData('currentIndicateList','Profesores');
    this.listingService.componentIndicate = 'Profesores';
    this.router.navigateByUrl('/list');

  }

  asignDetailData(teacher: teachers){

    this.detailService.detailsData= new Object({
      currentData: teacher,
      typeData: 'Profesor'
    });


    this.sessionData.storeData('currentDetailsData',this.detailService.detailsData);

    this.router.navigateByUrl('/details');

  }

  sortStudents(property: string){
    if(property == 'teacher_id'){
      this.currentTeachersList = this.allTeachers.sort((a,b) => a[property] - b[property]);}
    else{
      this.currentTeachersList = this.allTeachers.sort((a, b) => {
        return a[property as keyof teachers] < b[property as keyof teachers] ? -1 : a[property as keyof teachers] > b[property as keyof teachers] ? 1 : 0;
      });
    }
  }


}
