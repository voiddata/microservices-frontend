import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';
import { MandashboardComponent } from './components/mandashboard/mandashboard.component';
import { LeaverequestComponent } from './components/leaverequest/leaverequest.component';
import { LeaveapprovalComponent } from './components/leaveapproval/leaveapproval.component';
import { LeavehistoryComponent } from './components/leavehistory/leavehistory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EmpdashboardComponent,
    MandashboardComponent,
    LeaverequestComponent,
    LeaveapprovalComponent,
    LeavehistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
