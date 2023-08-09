import { Component,OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit{
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
