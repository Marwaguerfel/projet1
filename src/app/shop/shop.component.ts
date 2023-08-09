import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  Products!: Product[];

  errMess!: string;
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(
      (Products) => (this.Products = Products),
      (errmess) => (this.errMess = <any>errmess)
    );
  }

}
