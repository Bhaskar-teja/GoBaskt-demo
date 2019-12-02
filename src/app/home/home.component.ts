import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { HomeService, CommunicationService } from '../service';


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
 
  constructor(private homeService: HomeService, private communicationService: CommunicationService,config: NgbTabsetConfig) { 
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

  slickInit(event) {

  }
  breakpoint() {

  }

  afterChange() {

  }

  beforeChange() {

  }
  ngOnInit() {
    this.getAllBrandOffers(this.initPage);
    this.getAllLocalOffers();
    this.onLoadCart();
 }

  visibleOffers(selectedvalue) {
    this.selectedOffers = selectedvalue;
  }

  loadMore() {
    this.viewmored = 0;
    this.initPage = this.initPage + 1;
    this.getAllBrandOffersLoad(this.initPage);
  }


  onLoadCart() {
    if (localStorage.getItem("localoffercart")) {
      this.localoffercart = JSON.parse(localStorage.getItem("localoffercart"));
    }
    if (localStorage.getItem("brandoffercart")) {
      this.brandoffercart = JSON.parse(localStorage.getItem("brandoffercart"));
    }
    this.cartlength = 0;
    if(this.localoffercart && this.localoffercart.length){
       this.cartlength += this.localoffercart.length;
    }
    if(this.brandoffercart && this.brandoffercart.length){
      this.cartlength += this.brandoffercart.length;
    }
    this.communicationService.setSubject({value: this.cartlength});
    }

  addToCartBrand(param) {
    console.log(param);
    this.brandoffercart.push(param);
    localStorage.setItem("brandoffercart", JSON.stringify(this.brandoffercart));
    this.onLoadCart();
  }

  addToCartLocal(param) {
    console.log(param);
    this.localoffercart.push(param);
    localStorage.setItem("localoffercart", JSON.stringify(this.localoffercart));
    this.onLoadCart();
  }

  getAllBrandOffers(page) {
    this.initload = true;
    this.homeService.getAllBrandOffers(page).subscribe((data) => {
      this.brandOffers = data;
      this.initload = false;
    }, (error) => {
      this.initload = false;
      console.log(error)
    })
  }

  getAllBrandOffersLoad(page) {
    this.initload = true;
    this.homeService.getAllBrandOffers(page).subscribe((data) => {
      if(data.length > 0){
        this.viewmored = 1;
      }
      data.forEach(element => {
        this.brandOffers.push(element);
      });
      this.initload = false;
    }, (error) => {
      this.initload = false;
      console.log(error)
    })
  }

  getAllLocalOffers() {
    this.homeService.getAllLocalOffers().subscribe((data) => {
      this.localOffers = data;
    }, (error) => {
      console.log(error)
    })
  }

  callType(value) {
    this.homeService.getAllBrandOffersCallType(value).subscribe((data) => {
      this.brandOffers = data;
    }, (error) => {
      console.log(error)
    })
  }
  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

//   imageObject: Array<object> = [{
//     image: 'assets/images/5374.png',
//     alt: 'alt of image',
//     title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image',
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// {
//   image: 'assets/images/5374.png',
//   alt: 'alt of image',
//   title: 'title of image'
// },
// ];

// carouselOptions = {
//   margin: 25,
//   nav: true,
//   navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 3,
//       nav: true
//     },
//     600: {
//       items: 1,
//       nav: true
//     },
//     1000: {
//       items: 2,
//       nav: true,
//       loop: false
//     },
//     1500: {
//       items: 3,
//       nav: true,
//       loop: false
//     }
//   }
// }

// images = [
//   {
//     text: "Everfresh Flowers",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
//   },
//   {
//     text: "Festive Deer",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
//   },
//   {
//     text: "Morning Greens",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
//   },
//   {
//     text: "Bunch of Love",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
//   },
//   {
//     text: "Blue Clear",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
//   },
//   {
//     text: "Evening Clouds",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
//   },
//   {
//     text: "Fontains in Shadows",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
//   },
//   {
//     text: "Kites in the Sky",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
//   },
//   {
//     text: "Sun Streak",
//     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
//   }
// ]



}
