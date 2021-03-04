import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../models/Leave';

@Injectable({
  providedIn: 'root'
})
export class LeaverequestService {

  constructor(private http: HttpClient) { }

  requestLeave(leave: Leave): Observable<any> {
    let url = "http://localhost:8080/requestLeave";
    return this.http.post(url, leave); 
  }

  getLeaveDates(email: string): Observable<any> {
    let url = "http://localhost:8080/getLeaveDates/"+email;
    return this.http.get(url);
  }

  getHistory(email: string): Observable<any> {
    let url = "http://localhost:8080/getHistory/"+email;
    return this.http.get(url);
  }

  getRequestList(email: string): Observable<any> {
    let url = "http://localhost:8080/getRequestList/"+email;
    return this.http.get(url);
  }

  approve(id: number): Observable<any> {
    let url = "http://localhost:8080/approve";
    return this.http.post(url, id); 
  }

  
}
