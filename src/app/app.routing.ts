import { Routes, RouterModule } from "@angular/router";
import { ShoppingComponent } from "./shopping/shopping.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { BankingComponent } from "./banking/banking.component";

const APP_ROUTS: Routes = [
    { path: '', redirectTo: '/shopping', pathMatch: 'full' },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'banking', component: BankingComponent }
]

export const Router = RouterModule.forRoot(APP_ROUTS);