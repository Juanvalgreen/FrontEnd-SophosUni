import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {




  constructor(private httpClient: HttpClient) { }
//

  login (credentials: LoginRequest): Observable<any>{
    console.log(credentials);
    return this.httpClient.post(`${environment.apiBaseUrl}/user/login`,credentials);
  }


}
