import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { LoggedUser } from '../models/LoggedUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private _user: LoggedUser;

  get user() {
    return this._user;
  }

  set user(user: LoggedUser) {
    this._user = user;
  }

  constructor(private http: HttpClient) { this._user = new LoggedUser(); }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8080/login";
    return this.http.post(url, login); 
  }

}
