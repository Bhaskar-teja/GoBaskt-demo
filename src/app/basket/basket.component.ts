import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/core/service/communication.service'
import * as $ from 'jquery';
import { HttpService } from '../shared/core/service/http.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basktOffer: [];
  starsCount: any = 4.5;
  currentSelection: any = "All";
  brandoffercarts: any = [];
  localoffercarts: any = [];
  cartlength: any = 0;
  minimizestate : any = 0;
  items : any = [];
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  
  constructor(private communicationService: CommunicationService, public httpService: HttpService, ) { 

    this.masterSelected = false;
    this.checklist = [];
    this.getCheckedItemList();
  }


  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
   // this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    // this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];

    this.httpService.getBasketDetails().subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        response.body.data.map(item => this.checklist.push(item));
        // this.basktOffer = response.body.data;
       console.log(this.checklist);
      }
    }, error => {
      console.log(error);
    });

    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


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
