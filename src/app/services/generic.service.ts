import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedUser } from '../models/LoggedUser';
import { Login } from '../models/Login';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private _user: LoggedUser;

  get user() {
    return this._user;
  }

  set user(user: LoggedUser) {
    this._user = user;
  }

  constructor(private http: HttpClient) { this._user = new LoggedUser(); }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8765/generic-service/login";
    return this.http.post(url, login); 
  }

  register(register: Register) : Observable<any> {
    let url = "http://localhost:8765/generic-service/register";
    return this.http.post(url, register); 
  }
}
