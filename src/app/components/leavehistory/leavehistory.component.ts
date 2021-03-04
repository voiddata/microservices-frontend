import { Component, OnInit } from '@angular/core';
import { LeaverequestService } from 'src/app/services/leaverequest.service';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {

  res: any;

  constructor(private leaveRequestService: LeaverequestService) { }

  ngOnInit(): void {

    let e = JSON.parse(localStorage.getItem('currentUser')).email;
    this.leaveRequestService.getHistory(e).subscribe(response => {
      this.res = response;
      console.log(response);
    });
  }

}
