import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/core/service/communication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartlength: any = 0;
  subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getsubject().subscribe(obj => {      
      // console.log("obj", obj);
      this.cartlength = obj.value;
    });
   }

  ngOnInit(){

  }

}
