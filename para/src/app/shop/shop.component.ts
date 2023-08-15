import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  Products: any[] = [];
  
  currentPage = 1;
  productsPerPage = 2;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  filteredProducts: any[] = [];
  searchTerm: string = '';

  minPrice = 0;
  maxPrice = 1000;
  priceRange: number[] = [this.minPrice, this.maxPrice];


  constructor(private productsService: ProductsService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.Products = data;
      this.applyFilter(); // Apply the initial filter
    });
  }

  applyFilter(): void {
    console.log('Search term:', this.searchTerm);
      this.filteredProducts = this.Products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      this.filteredProducts = this.Products.filter(product =>
        product.price >= this.priceRange[0] && product.price <= this.priceRange[1]
      );
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
  }
}
