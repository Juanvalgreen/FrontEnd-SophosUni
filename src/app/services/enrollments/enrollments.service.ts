import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from 'src/app/models/enrollment.model';
import { environment } from 'src/env/environments';
import { SessionDataService } from '../session-data/session-data.service';
import { enrollmentRequest } from './enrollmentRequest';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {


  constructor(private httpClient: HttpClient, private sessionData:SessionDataService) { }


  headers = new HttpHeaders({
    'Authorization': this.sessionData.getData('currentUser').token

  });




  getAllEnrollmentsByStudentId(studentId: number){

    return this.httpClient.get<Enrollment[]>(`${environment.apiBaseUrl}/enrollments/${studentId}/students`,{headers: this.headers});
    // return this.httpClient.get<Enrollment[]>('../../../assets/dataEnrollment.json');


  }


  getAllEnrollmentsByCourseId(courseId: number): Observable<any>{

    return this.httpClient.get<Enrollment[]>(`${environment.apiBaseUrl}/enrollments/${courseId}/courses`, {headers: this.headers});
    // return this.httpClient.get<Enrollment[]>('../../../assets/dataEnrollment.json');


  }


  addNewEnrollemnt(enrollment: enrollmentRequest): Observable<any>{
    return this.httpClient.post(`${environment.apiBaseUrl}/enrollments`,enrollment,{headers: this.headers, responseType: 'text'} );
  }

  deleteEnrollment(enrollId: number): Observable<any>{
    return this.httpClient.delete(`${environment.apiBaseUrl}/enrollments/${enrollId}`,{headers: this.headers, responseType: 'text'} );
  }





}
