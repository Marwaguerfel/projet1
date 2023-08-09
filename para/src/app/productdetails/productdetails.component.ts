import { Component,OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent  implements OnInit{
  Product!: Product;
  id!: string;
  errMess!: string;
  constructor(private ProductsService: ProductsService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // @ts-ignore
    let id = this.route.snapshot.params.id;


    this.ProductsService.getProductById(id).subscribe(
      (Product) => (this.Product = Product),
      (errmess) => (this.errMess = <any>errmess)
    );
    
  }

}
