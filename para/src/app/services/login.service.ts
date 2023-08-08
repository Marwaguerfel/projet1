import { Injectable } from '@angular/core';
import { user } from '../models/User';
import { of, Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient,) { }
   // @ts-ignore
  headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
   params = new HttpParams();
      login(username: string, password: string) {

    let postData = {username : username ,password :password};

    this.http
      .post<any>(`${environment.baseUrl}/login`, postData, {
        headers: this.headers,
        params: this.params,
      })
      .subscribe((res) => console.log(res));
    return this.http.post<any>( `${environment.baseUrl}/login`, postData)
      .pipe(map(user => {
          if (user) {
            localStorage.setItem('currentuser', JSON.stringify(user));
            return user;
          }
        }),

      );


      }

}
