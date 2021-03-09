import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-leaveapproval',
  templateUrl: './leaveapproval.component.html',
  styleUrls: ['./leaveapproval.component.css']
})
export class LeaveapprovalComponent implements OnInit {

  res: any;

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    let e = JSON.parse(localStorage.getItem('currentUser')).email;
    this.managerService.getRequestList(e).subscribe(response => {
      this.res = response;
      console.log(response);
    });
  }

  approve(id: number) {
    this.managerService.approve(id).subscribe(response => {
      window.location.reload();
    });
  }

  
}
