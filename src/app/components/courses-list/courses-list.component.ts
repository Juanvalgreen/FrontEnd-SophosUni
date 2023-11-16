import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../state/auth/auth.reducer'
import { Courses } from 'src/app/models/courses.model';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { ListingService } from 'src/app/services/listing/listing.service';

import { SessionDataService } from 'src/app/services/session-data/session-data.service';
import { LoadingService } from 'src/app/services/loading/loading.service';




@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {

  loading: boolean = false;

  isCoursesPage: boolean;
  allCourses : Courses[];
  currentCoursesList : Courses[] = [];

  isError: boolean = false;

  searchBar = this.formBuilder.group({
    search: [''],
  })


  constructor(private loadingService: LoadingService, private courseService : CoursesService, private formBuilder:FormBuilder, private listingService:ListingService,private detailService: DetailsDataService, private router:Router, private store: Store, private sessionData: SessionDataService){
    this.allCourses = [];
    this.isCoursesPage = false
  }




  ngOnInit() {

    this.loadingService.loading$.subscribe(loading => this.loading = loading);

    this.isCoursesPage = this.router.url.includes('list');


    this.courseService.getAllCourses().subscribe(
      data => {
        this.allCourses = data;
        this.currentCoursesList = this.allCourses;
      },error => {
        console.log(error);
        this.isError = true;
    });


    this.searchBar?.get('search')?.valueChanges.subscribe((searchValue) => {
      if(searchValue == ''){
        this.currentCoursesList = this.allCourses;
      }
      // Llamar al método buscar del servicio courses con el valor de búsqueda
      this.courseService.searchAllCoursesbyName(searchValue as string).subscribe(
        data => {
          this.currentCoursesList = data;
        },error => {
          console.log(error);
        }
      )
    });

  }

  redirectToList(){
    this.sessionData.storeData('currentIndicateList','Cursos');
    this.listingService.componentIndicate = 'Cursos';
    this.router.navigateByUrl('/list');
  }


  asignDetailData(course: Courses){

    this.detailService.detailsData= new Object({
      currentData: course,
      typeData: 'Curso'
    });


    this.sessionData.storeData('currentDetailsData',this.detailService.detailsData);

    this.router.navigateByUrl('/details');

  }


  sortCourses(property: string){
    if(property == 'course_id'){
      this.currentCoursesList = this.allCourses.sort((a,b) => a[property] - b[property]);}
    else{
      this.currentCoursesList = this.allCourses.sort((a, b) => {
        return a[property as keyof Courses] < b[property as keyof Courses] ? -1 : a[property as keyof Courses] > b[property as keyof Courses] ? 1 : 0;
      });
    }
  }

}
