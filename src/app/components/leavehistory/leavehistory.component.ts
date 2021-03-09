import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {

  res: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    let e = JSON.parse(localStorage.getItem('currentUser')).email;
    this.employeeService.getHistory(e).subscribe(response => {
      this.res = response;
      console.log(response);
    });
  }

}
