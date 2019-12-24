import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/home/home.component'
import { BasketComponent} from '../app/basket/basket.component'
import { LocalOffersComponent} from '../app/local-offers/local-offers.component'
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { _getOptionScrollPosition } from '@angular/material/core';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "Signup", component: SignupComponent},
  {path: "Login", component: LoginComponent},
  {path: "basket", component: BasketComponent},
  {path: "localoffers", component: LocalOffersComponent},
  {path: "productdetails", component: ProductDetailsComponent},
  {path: "result", component: SearchResultComponent},

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
