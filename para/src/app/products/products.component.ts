import { Component,OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
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
