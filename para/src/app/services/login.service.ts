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

    this.http.post<any>(`${environment.baseUrl}/login`, postData, {
        headers: this.headers,
        params: this.params,
      })
      .subscribe((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.user.username);
      });

      }
logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();

  }

  async signup(username: string, password: string ,password_repeat :string, email:string) {

    let postData = {username : username ,password :password , password_repeat :password_repeat , email :email};
    console.log(postData);
    this.http
      .post<any>(`${environment.baseUrl}/sign-up`, postData, {
        headers: this.headers,
        params: this.params,
      })
      .subscribe((res) => console.log(res));



  }

}
