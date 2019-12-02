import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as globalVariable from "../global";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http){}

  getAllBrandOffers(page) {
    return this.http
      .get(globalVariable.url + "brandoffers/pagination/"+page+"/8").pipe(
        map(res => res.json())
    );
  }

  getAllLocalOffers() {
    return this.http
      .get(globalVariable.url + "businessoffers").pipe(
        map(res => res.json())
    );
  }

  getAllBrandOffersCallType(value) {
    return this.http
      .get(globalVariable.url + "brandoffers/majorcategory/"+value).pipe(
        map(res => res.json())
    );
  }

}
