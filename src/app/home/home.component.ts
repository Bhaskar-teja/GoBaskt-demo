import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { HomeService, CommunicationService } from '../service';
import { HttpService } from '../shared/core/service/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl;
  showSlider = true;
  sliderWidth: Number = 940;
  sliderImageWidth: Number = 250;
  sliderImageHeight: Number = 200;
  sliderArrowShow: Boolean = true;
  sliderInfinite: Boolean = true;
  sliderImagePopup: Boolean = true;
  sliderAutoSlide: Boolean = true;
  sliderSlideImage: Number = 1;
  sliderAnimationSpeed: any = 1;
 
  constructor(config: NgbTabsetConfig,private homeService:HomeService, public httpService: HttpService) { 
    config.justify = 'center';
  }

  starsCount: any = 4.5;
  initPage: any = 0;
  brandOffers: any = [];
  localOffers: any = [];
  brandoffercart: any = [];
  localoffercart: any = [];
  nameimg: any = "";
  namedes: any = "";
  initload: any = false;
  selectedOffers: any = "LB";
  cartlength: any = 0;
  viewmored: any = 1;
  today:any;
  
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>",
    "infinite": false
  };
  ngOnInit() {
    this.test();
 }
  test() {
    this.httpService.getOffers().subscribe(data=>{
      console.log(data);
    });
  //   .subscribe((response: any) => {
  //     console.log(response);
  //     if (response.status === 200) {
  //      console.log(response.data);
  //     }
  //   }, error => {
  //     console.log(error);
  //   });
   }
}
