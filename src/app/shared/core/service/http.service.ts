import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { authApiUrl } from './../../core/constants/common.constants';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getRegisterUrl() {
    throw new Error("Method not implemented.");
  }
  registerUser(RegistrationData: import("../models/common.models").registrationParams) {
    throw new Error("Method not implemented.");
  }
  constructor(public http: HttpClient, private helperService: HelperService) { }
  getHeaderAfterToken() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json; charset=utf-8')
      .set( 'Access-Control-Allow-Origin','*')
      .set( 'Access-Control-Allow-Methods','GET')
      .set('Access-Control-Allow-Headers','application/json',)

  }

  getToken() {
    if (this.helperService.getFromLocalStorage('tokenType')) {
      return (this.helperService.getFromLocalStorage('tokenType') + ' ' + this.helperService.getFromLocalStorage('accessToken'));
    } else {
      return;
    }
  }
  

  postCreateUser(message) {
    return this.http.post("http://18.223.122.108:8080/gobaskt/createUser", message, { headers: this.getHeaderAfterToken(), observe: 'response' });
  }

  getUser() {
    return this.http.get(authApiUrl.getRegisterUrl, { headers: this.getHeaderAfterToken(), observe: 'response' });
  }

  getOffers() {
    return this.http.get(authApiUrl.gobasktUrl, { headers: this.getHeaderAfterToken(), observe: 'response'});
  }

  getlmOffers(id) {
    return this.http.get(authApiUrl.getlmOfferUrl + '/' + id, { headers: this.getHeaderAfterToken(), observe: 'response'})
  }

  getSaveOffers(id) {
    return this.http.get("http://18.223.122.108:8086/gobaskt/basket/coupons" + '/' + id, { headers: this.getHeaderAfterToken(), observe: 'response'})
  } 
  getBasketDetails() {
    return this.http.get("http://18.223.122.108:8086/gobaskt/basket/getBasket" , { headers: this.getHeaderAfterToken(), observe: 'response'});
  } 
 
}
