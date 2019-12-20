import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { authApiUrl } from './../../core/constants/common.constants';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http: HttpClient, private helperService: HelperService) { }
  getHeaderAfterToken() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json; charset=utf-8')
      .set("Access-Control-Allow-Origin", "*")
      .set( 'Access-Control-Allow-Origin','*')
      .set( 'Access-Control-Allow-Methods','GET')
      .set('Access-Control-Allow-Headers','application/json',)
     
      
      // .set('Authorization', this.getToken());
  }

  getToken() {
    if (this.helperService.getFromLocalStorage('tokenType')) {
      return (this.helperService.getFromLocalStorage('tokenType') + ' ' + this.helperService.getFromLocalStorage('accessToken'));
    } else {
      return;
    }
  }

  postCreateUser(message) {
    return this.http.post(authApiUrl.postRegisterUrl, message, { headers: this.getHeaderAfterToken(), observe: 'response' });
  }

  getUser() {
    return this.http.get(authApiUrl.getRegisterUrl, { headers: this.getHeaderAfterToken(), observe: 'response' });
  }

  getOffers() {
    return this.http.get(authApiUrl.gobasktUrl, { headers: this.getHeaderAfterToken(), observe: 'response'});
  }

 
}
