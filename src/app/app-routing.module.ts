import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import {ProductsComponent} from "./products/products.component";
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'home' ,
    component: IndexComponent,

  },

  {
    path:'shop' ,
    component: ShopComponent

  },

  {
    path:'contact' ,
    component: ContactComponent
  },
  {
    path:'list' ,
    component: ProductsComponent
  },
  {
    path:'productDetail' ,
    component: ProductdetailsComponent
  },
  {
    path:'checkout' ,
    component: CheckoutComponent
  },
  {
    path:'login' ,
    component: LoginComponent
  },
  {
    path:'register' ,
    component: RegisterComponent
  },
  {
    path:'forgetp' ,
    component: ForgetComponent
  },

  {
    path:'cart' ,
    component: CartComponent
  },
  {path: 'productDetail/:id', component: ProductdetailsComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
