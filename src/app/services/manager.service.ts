import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getRequestList(email: string): Observable<any> {
    let url = "http://localhost:8765/manager-service/getRequestList/"+email;
    return this.http.get(url);
  }

  approve(id: number): Observable<any> {
    let url = "http://localhost:8765/manager-service/approve";
    return this.http.post(url, id); 
  }
}
