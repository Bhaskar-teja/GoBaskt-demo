import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { HomeService } from '../shared/core/service/home.service';
import { CommunicationService } from '../shared/core/service/communication.service';
import { HttpService } from '../shared/core/service/http.service';
/* import {Location, Appearance,} from '@angular-material-extensions/google-maps-autocomplete';
import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult; */


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  localOfferDetails: [];
  localoffercart: any = [];
  cartlength: any = 0;

 /*  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult; */

  constructor(config: NgbTabsetConfig, private homeService: HomeService, public httpService: HttpService,  private communicationService: CommunicationService) {
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

    
/* 
    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;

    this.setCurrentPosition(); */
  }

  /* private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

 onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
  }
 */

  onLoadCart() {
    if (localStorage.getItem("localoffercart")) {
      
      this.localoffercart = JSON.parse(localStorage.getItem("localoffercart"));
      console.log(this.localoffercart)
    }
    this.cartlength = 0;
    if(this.localoffercart && this.localoffercart.length){
       this.cartlength += this.localoffercart.length;
    }
   
    this.communicationService.setSubject({value: this.cartlength});
    }
  

  localOffer() {
    this.httpService.getOffers().subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        this.localOfferDetails = response.body.data;
      //  console.log(this.localOfferDetails.values);
      }
    }, error => {
      console.log(error);
    });
  }

  addToCartLocal(param) {
    console.log(param);
    this.localoffercart.push(param);
    localStorage.setItem("localoffercart", JSON.stringify(this.localoffercart));
    this.onLoadCart();
  }

  
}
