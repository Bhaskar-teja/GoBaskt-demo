import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registrationParams } from '../shared/core/models/common.models';
import { HttpService } from '../shared/core/service/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  accountType: any;
  submitted = false;
  registraionSuccess = false;
  registrationMsg: any;
  RegistrationData = new registrationParams();

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.buildRegistraionForm();
    this.registrationMsg = '';
  }



  get f() { return this.registerForm.controls; }

  buildRegistraionForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.RegistrationData.emailId = this.registerForm.value.emailId;
    this.RegistrationData.firstName = this.registerForm.value.firstName;
    this.RegistrationData.lastName = this.registerForm.value.lastName;
    this.RegistrationData.password = this.registerForm.value.password;
    console.log(this.RegistrationData);
    this.httpService.postCreateUser(this.RegistrationData).subscribe((response: any) => {
      console.log(response);
      if (response.status === 202) {
        this.router.navigate(['/auth/home']);
      }
    }, error => {
      console.log(error);
    });
  }

  
}
