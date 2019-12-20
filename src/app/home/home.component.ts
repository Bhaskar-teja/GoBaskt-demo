import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { HomeService } from '../shared/core/service/home.service';
import { HttpService } from '../shared/core/service/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   localOfferDetails:[];
  constructor(config: NgbTabsetConfig,private homeService:HomeService, public httpService: HttpService) { 
    config.justify = 'center';
  }  
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>",
    "infinite": false
  };
  ngOnInit() {
    this.localOffer();
 }
  localOffer() {
    this.httpService.getOffers()
    .subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
       this.localOfferDetails = response.body.data;
       console.log(this.localOfferDetails.values);
      // console.log(response.body);
      // console.log(response.body);
      //  console.log(this.localOfferDetails);
      //  console.log(this.localOfferDetails.data);
      }
    }, error => {
      console.log(error);
    });
   }
}
