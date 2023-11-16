import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/models/courses.model';
import {courseRequest} from './courseRequest';
import { environment } from 'src/env/environments';
import { SessionDataService } from '../session-data/session-data.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  headers = new HttpHeaders({
    'Authorization': this.sessionData.getData('currentUser').token

  })

  constructor(private httpClient: HttpClient, private store:Store, private sessionData:SessionDataService) { }




  getAllCourses(): Observable<Courses[]>{

    return this.httpClient.get<Courses[]>(`${environment.apiBaseUrl}/courses`,{headers: this.headers});
    // return this.httpClient.get<Courses[]>('../../../assets/dataCourses.json');
  }


  getAllCoursesByTeacherId(teacherId: number): Observable<Courses[]>{

    return this.httpClient.get<Courses[]>(`${environment.apiBaseUrl}/courses/${teacherId}/teachers`,{headers: this.headers});
    // return this.httpClient.get<Courses[]>('../../../assets/dataCourses.json');
  }

  searchAllCoursesbyName(searchName: string): Observable<Courses[]>{

    return this.httpClient.get<Courses[]>(`${environment.apiBaseUrl}/courses/name/${searchName}`,{headers: this.headers});

  }

  addNewCourse(course: courseRequest): Observable<any>{

    console.log(course);
    return this.httpClient.post(`${environment.apiBaseUrl}/courses`,course,{headers: this.headers, responseType: 'text'});

  }

  deleteCourse(courseId: number): Observable<any>{
    return this.httpClient.delete(`${environment.apiBaseUrl}/courses/${courseId}`,{headers: this.headers, responseType: 'text'});
  }

  updateCourse(course: courseRequest): Observable<any>{
    return this.httpClient.put(`${environment.apiBaseUrl}/courses`,course,{headers: this.headers, responseType: 'text'});
  }

}
