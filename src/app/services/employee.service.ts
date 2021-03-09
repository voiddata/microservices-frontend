import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../models/Leave';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  requestLeave(leave: Leave): Observable<any> {
    let url = "http://localhost:8765/employee-service/requestLeave";
    return this.http.post(url, leave); 
  }

  getLeaveDates(email: string): Observable<any> {
    let url = "http://localhost:8765/employee-service/getLeaveDates/"+email;
    return this.http.get(url);
  }

  getHistory(email: string): Observable<any> {
    let url = "http://localhost:8765/employee-service/getHistory/"+email;
    return this.http.get(url);
  }
}
