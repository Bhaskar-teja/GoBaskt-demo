import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HomeService,CommunicationService  } from './service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BasketComponent,
    LocalOffersComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SlickCarouselModule,
    OwlModule,
    NgImageSliderModule,
    RatingModule,
    MomentModule,
    TagInputModule,
    BrowserAnimationsModule,
    SliderModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HomeService,CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
