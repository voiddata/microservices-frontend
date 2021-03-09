import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Leave } from 'src/app/models/Leave';
import { EmployeeService } from 'src/app/services/employee.service';
declare var $: any;

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  leaveRequestForm: FormGroup;
  datesToBeDisabled: Date[] = new Array<Date>();

  ngOnInit(): void {

    this.leaveRequestForm = this.fb.group({
      days: [, [Validators.required, Validators.max(3)]],
      reason: ['', [Validators.required]],
      dates: ['']
    });

    let email = JSON.parse(localStorage.getItem('currentUser')).email;
    let dates;

    this.employeeService.getLeaveDates(email).subscribe(response => {
      dates = response;
      dates.forEach(element => {
        this.datesToBeDisabled.push(new Date(element));
      });
    });

    

  }

  requestLeave() {
    let dates = $('#dates').multiDatesPicker('getDates');
    this.leaveRequestForm.get('dates').setValue(dates);

    let dateArray = new Array<Date>();

    dates.forEach(element => {
      dateArray.push(new Date(new Date(element).toLocaleString("en-US", {timeZone: 'Asia/Kolkata'})));
    });

    let leave = new Leave();
    leave.dates = dateArray;
    leave.days = this.leaveRequestForm.get('days').value;
    leave.userMail = JSON.parse(localStorage.getItem('currentUser')).email;
    leave.reason = this.leaveRequestForm.get('reason').value;

    this.employeeService.requestLeave(leave).subscribe(response => {
      $('#resultMsg').html(response.message);
      $('#result').modal('show');
      setTimeout(function () {
        $('#result').modal('hide');
      }, 2000);
    });
  }

  setMaxDays(maxDays: number) {
    $(function () {
      $('#dates').multiDatesPicker({
        maxPicks: maxDays,
        beforeShowDay: $.datepicker.noWeekends,
        minDate: 0,
        addDisabledDates: this.datesToBeDisabled
      });
    });
  }
}
