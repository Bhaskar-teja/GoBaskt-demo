import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/core/service/communication.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/core/service/http.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartlength: any;
  subscription: Subscription;

  constructor(private communicationService: CommunicationService, public httpService: HttpService) {
     this.subscription = this.communicationService.getsubject().subscribe(obj => {      
    //   // console.log("obj", obj);
       this.cartlength = obj.value;
       console.log(this.cartlength);
     });
    this.httpService.getBasketDetails().subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        console.log(response.body.data);
        if (response.body.data) {
          if(response.body.data.length !== 0) {
            this.cartlength = response.body.data.length;
          }
        }
      }
    }, error => {
      console.log(error);
    });
   }

  ngOnInit(){

  }

}
