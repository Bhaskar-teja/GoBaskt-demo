import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/home/home.component'
import { BasketComponent} from '../app/basket/basket.component'
import { LocalOffersComponent} from '../app/local-offers/local-offers.component'
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';


const routes: Routes = [
  {path: "", component: SignupComponent},
  {path: "Login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "basket", component: BasketComponent},
  {path: "localoffers", component: LocalOffersComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
