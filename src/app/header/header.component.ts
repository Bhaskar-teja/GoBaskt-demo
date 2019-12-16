import { Component, OnInit } from '@angular/core';
//import { CommunicationService } from '../service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartlength: any = 0;
  subscription: Subscription;

  ngOnInit(){

  }

}
