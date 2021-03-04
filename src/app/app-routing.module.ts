import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';
import { LeaveapprovalComponent } from './components/leaveapproval/leaveapproval.component';
import { LeavehistoryComponent } from './components/leavehistory/leavehistory.component';
import { LeaverequestComponent } from './components/leaverequest/leaverequest.component';
import { LoginComponent } from './components/login/login.component';
import { MandashboardComponent } from './components/mandashboard/mandashboard.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeeDashboard', component: EmpdashboardComponent,
    children: [
      { path: 'leaveRequest', component: LeaverequestComponent },
      { path: 'leaveHistory', component: LeavehistoryComponent }
    ] },
  { path: 'managerDashboard', component: MandashboardComponent,
    children: [
      { path: 'leaveApproval', component: LeaveapprovalComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
