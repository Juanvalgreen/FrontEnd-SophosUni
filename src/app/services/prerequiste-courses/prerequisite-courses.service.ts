import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrerequisiteCourse } from 'src/app/models/prerequisiteCourse.model';
import { environment } from 'src/env/environments';
import { SessionDataService } from '../session-data/session-data.service';

@Injectable({
  providedIn: 'root'
})
export class PrerequisiteCoursesService {

  constructor(private httpClient: HttpClient,private sessionData:SessionDataService) { }




  headers = new HttpHeaders({
    'Authorization': this.sessionData.getData('currentUser').token

  });





  getAllPrerequisteCoursesByCourseId(courseId: number){


    return this.httpClient.get<PrerequisiteCourse[]>(`${environment.apiBaseUrl}/prerequisites/${courseId}/courses`,{headers: this.headers});
    // return this.httpClient.get<PrerequisiteCourse[]>('../../../assets/dataPrerequisites.json');


  }





}
