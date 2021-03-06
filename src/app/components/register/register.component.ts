import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Register } from '../../models/Register';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private genericService: GenericService) { }

  result: string = '';
  getManagerId: boolean = false;

  registerForm: FormGroup = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(5)]],
    lname: ['', [Validators.required, Validators.minLength(5)]],
    email: ['' , [Validators.required, Validators.email]],
    pwd: ['', [Validators.required, this.pwdValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/) ]],
    cpwd: ['', [Validators.required]],
    role: ['', [Validators.required]]
  }, {validator: this.cpwdValidator('pwd','cpwd')});

  ngOnInit(): void {
  }

  
  

  register() {

    let register = new Register();
    register.firstName = this.registerForm.get('fname').value;
    register.lastName = this.registerForm.get('lname').value;
    register.email = this.registerForm.get('email').value;
    register.password = this.registerForm.get('pwd').value;
    register.role = this.registerForm.get('role').value;
    if (this.registerForm.get('managerId') != null) {
      register.managerId = this.registerForm.get('managerId').value;
    }
    console.log(register);

    this.genericService.register(register).subscribe(response => {
      console.log(response);
      if (response.status === 'SUCCESS') {
        this.result = response.message;
      } else if (response.status === 'FAILED') {
        this.result = response.message;
      }
    });
  }

  pwdValidator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid = regExp.test(control.value);
  
      return valid ? null : {pwdValue: {value: control.value}};
    };
  }

  

  cpwdValidator(pwd: string, cpwd: string) {
    return (group: FormGroup) => {
      let pwd = group.controls.pwd,
          cpwd = group.controls.cpwd;
      if (cpwd.value == '') {
        return cpwd.setErrors({required: true});
      } else if (pwd.value !== cpwd.value) {
        cpwd.setErrors({notEquivalent: true});
      } else {
          return cpwd.setErrors(null);
      }
    };
  }

  inputManagerID() {
    this.getManagerId = true;
    this.registerForm.addControl('managerId', new FormControl('', Validators.required));
  }

  dontInputManagerID() {
    this.getManagerId = false;
    this.registerForm.removeControl('managerId');
  }

}
