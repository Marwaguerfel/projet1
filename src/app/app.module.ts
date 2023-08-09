import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadercourComponent } from './headercour/headercour.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    IndexComponent,
    ProductdetailsComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HeadercourComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
