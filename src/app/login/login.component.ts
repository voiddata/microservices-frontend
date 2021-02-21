import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUser } from '../models/LoggedUser';
import { Login } from '../models/Login';
import { LoginService } from '../services/login.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  
  result: string = '';

  loginForm: AbstractControl = this.fb.group({
    email: ['' , [Validators.required, Validators.email]],
    pwd: ['', [Validators.required]],
    role: ['', [Validators.required]]
  });

  ngOnInit(): void {
    const currentUser: LoggedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser != null) {
      if (currentUser.role === 'emp') {
        this.router.navigate(['employeeDashboard']);
      } else if (currentUser.role === 'man') {
        this.router.navigate(['managerDashboard']);
      }
    }
  }

  login() {

    let login = new Login();
    login.email = this.loginForm.get('email').value;
    login.password = this.loginForm.get('pwd').value;
    login.role = this.loginForm.get('role').value;

    this.loginService.login(login).subscribe(response => {
      console.log(response);
      if (response.status === 'SUCCESS') {
        this.result = response.message;
        this.loginService.user = response.loggedUser;
        localStorage.setItem("currentUser",JSON.stringify(response.loggedUser));
      } else if (response.status === 'FAILED') {
        this.result = response.message;
      }
      setTimeout(function() {
        $('#exampleModalCenter').modal('hide');
      }, 1000);
    });
  }

  forgotPassword() {
    
  }

}
