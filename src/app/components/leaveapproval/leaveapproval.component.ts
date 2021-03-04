import { Component, OnInit } from '@angular/core';
import { LeaverequestService } from 'src/app/services/leaverequest.service';

@Component({
  selector: 'app-leaveapproval',
  templateUrl: './leaveapproval.component.html',
  styleUrls: ['./leaveapproval.component.css']
})
export class LeaveapprovalComponent implements OnInit {

  res: any;

  constructor(private leaveRequestService: LeaverequestService) { }

  ngOnInit(): void {
    let e = JSON.parse(localStorage.getItem('currentUser')).email;
    this.leaveRequestService.getRequestList(e).subscribe(response => {
      this.res = response;
      console.log(response);
    });
  }

  approve(id: number) {
    this.leaveRequestService.approve(id).subscribe(response => {
      window.location.reload();
    });
  }

  
}
