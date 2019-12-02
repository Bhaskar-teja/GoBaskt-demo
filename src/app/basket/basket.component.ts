import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../service/communication.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  starsCount: any = 4.5;
  currentSelection: any = "All";
  brandoffercarts: any = [];
  localoffercarts: any = [];
  cartlength: any = 0;
  minimizestate : any = 0;
  items : any = [];
  
  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.onLoadBasket();
    $(function () {
      $("#addClass").click(function () {
        $('#qnimate').addClass('popup-box-on');
      });
      $("#removeClass").click(function () {
        $('#qnimate').removeClass('popup-box-on');
      });
    })
  }

  onLoadBasket() {
    if (localStorage.getItem("brandoffercart")) {
      this.brandoffercarts = JSON.parse(localStorage.getItem("brandoffercart"));
    }
    if (localStorage.getItem("localoffercart")) {
      this.localoffercarts = JSON.parse(localStorage.getItem("localoffercart"));
    }

    this.cartlength = 0;

    if (this.localoffercarts && this.localoffercarts.length) {
      this.cartlength += this.localoffercarts.length;
    }
    if (this.brandoffercarts && this.brandoffercarts.length) {
      this.cartlength += this.brandoffercarts.length;
    }
    console.log("this.cartlength", this.cartlength)
    this.communicationService.setSubject({ value: this.cartlength });
  }

  changeSelection(value) {
    this.currentSelection = value;
  }

  printComponent() {
    let printContents = document.getElementById("printcomponent").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  emailComponent() {
    setTimeout(() => {
      let emailContents = document.getElementById("emailcomponent").innerHTML;
      document.getElementById("emailTemplateSelector").innerHTML = emailContents;
    }, 300);
  }
  removeEmailBox(){

  }
  
  minimize(){
    if(this.minimizestate == 1){
      this.minimizestate = 2;
      $(".popup-box").css("height", "42px");
      $(".popup-messages-footer").css("display", "none");
    }else{
      this.minimizestate = 1;
      $(".popup-box").css("height", "");
      $(".popup-messages-footer").css("display", "");
    }    
  }

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  brandOfferremove(index) {
    if (this.brandoffercarts.length) {
      this.brandoffercarts.splice(index, 1);
      localStorage.setItem("brandoffercart", JSON.stringify(this.brandoffercarts));
    }
    this.onLoadBasket();
  }

  localOfferremove(index) {
    if (this.localoffercarts.length) {
      this.localoffercarts.splice(index, 1);
      localStorage.setItem("localoffercart", JSON.stringify(this.localoffercarts));
    }
    this.onLoadBasket();
  }
}
