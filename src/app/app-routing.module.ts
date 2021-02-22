import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MandashboardComponent } from './components/mandashboard/mandashboard.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeeDashboard', component: EmpdashboardComponent },
  { path: 'managerDashboard', component: MandashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
