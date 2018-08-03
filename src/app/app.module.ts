import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from './app.routing';


import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CommonService } from './shared/common.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BankingComponent } from './banking/banking.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CartComponent,
    CheckoutComponent,
    BankingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Router
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
