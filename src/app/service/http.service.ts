import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
  getHeaderAfterToken() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Accept', 'application/json; charset=utf-8')
     
  }

  // getFamousFor(userId) {
  //   return this.http.get(authApiUrl.getFamousForUrl, { params: { userId }, headers: this.getHeaderAfterToken(), observe: 'response' });
  // }
}
