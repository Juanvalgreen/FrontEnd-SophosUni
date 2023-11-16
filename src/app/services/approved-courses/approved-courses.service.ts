import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApprovedCourse } from 'src/app/models/approvedCourse.model';
import { environment } from 'src/env/environments';
import { SessionDataService } from '../session-data/session-data.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovedCoursesService {


  headers = new HttpHeaders({
    'Authorization': this.sessionData.getData('currentUser').token

  });

  constructor(private httpClient: HttpClient, private sessionData:SessionDataService) { }



  getAllEnrollmentsByStudentId(studentId: number): Observable<any>{

    return this.httpClient.get<ApprovedCourse[]>(`${environment.apiBaseUrl}/approvedCourses/${studentId}/students`,{headers: this.headers});
    // return this.httpClient.get<ApprovedCourse[]>('../../../assets/dataApprovedCourses.json');


  }




}
