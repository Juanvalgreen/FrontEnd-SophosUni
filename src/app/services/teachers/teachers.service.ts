import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { teachers } from 'src/app/models/teachers.model';
import { environment } from 'src/env/environments';
import { SessionDataService } from '../session-data/session-data.service';
import { teacherRequest } from './teacherRequest';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private httpClient:HttpClient, private sessionData:SessionDataService) { }



  headers = new HttpHeaders({
    'Authorization': this.sessionData.getData('currentUser').token

  });




  getAllTeachers() : Observable<teachers[]>{

    return this.httpClient.get<teachers[]>(`${environment.apiBaseUrl}/teachers`,{headers: this.headers});

  }

  searchAllTeachersByName(searchName: string) : Observable<teachers[]>{
    return this.httpClient.get<teachers[]>(`${environment.apiBaseUrl}/teachers/name/${searchName}`,{headers: this.headers});
  }

  addNewTeacher(teacher: teacherRequest) : Observable<any>{

    return this.httpClient.post(`${environment.apiBaseUrl}/teachers`,teacher,{headers: this.headers,  responseType: 'text'});
  }

  deleteTeacher(teacherId: number): Observable<any>{
    return this.httpClient.delete(`${environment.apiBaseUrl}/teachers/${teacherId}`,{headers: this.headers, responseType: 'text'});
  }

  updateTeacher(teacher: teacherRequest): Observable<any>{
    return this.httpClient.put(`${environment.apiBaseUrl}/teachers`,teacher,{headers: this.headers, responseType: 'text'});
  }

}
