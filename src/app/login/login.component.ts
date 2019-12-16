import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpService } from '../shared/core/service/http.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginParams } from '../shared/core/models/common.models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  bgClass = 'home';
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;
  error = '';
  loginData = new loginParams();

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, public httpService: HttpService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'embedded-body');

    this.loginForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
}
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'embedded-body');
  }
  // goToHome() {
  //   this.router.navigate(['/auth/home']);
  // }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    console.log(this.loginForm.value);
    this.httpService.postCreateUser(this.loginForm.value).subscribe((response: any) => {
      console.log(response);
      if (response.status === 202) {
        this.router.navigate(['/auth/home']);
      }
    }, error => {
      console.log(error);
    });
}

  // login(loginData) {
  //   this.httpService.postCreateUser(loginData).subscribe((response: any) => {
  //     if (response.status === 202) {
  //       this.router.navigate(['/auth/home']);
  //     }
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}