import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {
    path:'home' ,
    component: IndexComponent
  },
  {
    path:'shop' ,
    component: ShopComponent
  },
  {
    path:'blog' ,
    component: BlogComponent
  },
  {
    path:'home' ,
    component: IndexComponent
  },
  {
    path:'about' ,
    component: AboutComponent
  },
  {
    path:'contact' ,
    component: ContactComponent
  },
  {
    path:'list' ,
    component: ProductsComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
