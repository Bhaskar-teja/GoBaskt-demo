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
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Accept', 'application/json; charset=utf-8')
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
}
