import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { students } from 'src/app/models/students.model';
import { environment } from 'src/env/environments';
import { SessionDataService } from '../session-data/session-data.service';
import { studentRequest } from './studentRequest';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient : HttpClient, private sessionData:SessionDataService) { }


  headers = new HttpHeaders({
    'Authorization': this.sessionData.getData('currentUser').token

  });





  getAllStudents() : Observable<students[]>{

    return this.httpClient.get<students[]>(`${environment.apiBaseUrl}/students`,{headers: this.headers});
  }

  searchStudentsByName(searchName: string) : Observable<students[]>{
    return this.httpClient.get<students[]>(`${environment.apiBaseUrl}/students/name/${searchName}`,{headers: this.headers});
  }

  addNewStudent(student: studentRequest): Observable<any>{
    return this.httpClient.post(`${environment.apiBaseUrl}/students`,student,{headers: this.headers, responseType: 'text'});
  }

  deleteStudent(studentId: number): Observable<any>{
    return this.httpClient.delete(`${environment.apiBaseUrl}/students/${studentId}`,{headers: this.headers, responseType: 'text'});
  }

  updateStudent(student: studentRequest): Observable<any>{
    return this.httpClient.put(`${environment.apiBaseUrl}/students`,student,{headers: this.headers, responseType: 'text'});
  }


}
