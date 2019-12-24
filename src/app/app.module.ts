import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../app/shared/core/service/http.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { SliderModule } from 'angular-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';
import {RatingModule} from "ngx-rating";
import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { LocalOffersComponent } from './local-offers/local-offers.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';

// Services
import { CommunicationService  } from '../app/shared/core/service/communication.service';
import { HomeService  } from '../app/shared/core/service/home.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultComponent } from './search-result/search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BasketComponent,
    LocalOffersComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailsComponent,
    SearchResultComponent    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    OwlModule,
    MatMenuModule,
    NgImageSliderModule,
    RatingModule,
    MomentModule,
    TagInputModule,
    BrowserAnimationsModule,
    SliderModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpService,HomeService,CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
