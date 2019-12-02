import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: Http){}
  
}
