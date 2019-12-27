import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/core/service/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  lmOfferData: any;
  constructor(private route: ActivatedRoute, public httpService: HttpService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.lmOffer();
  }

  lmOffer() {
    this.httpService.getlmOffers(this.id).subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        this.lmOfferData = response.body.data;
        console.log(this.lmOfferData)
      }
    }, error => {
      console.log(error);
    });
  }
  
}
