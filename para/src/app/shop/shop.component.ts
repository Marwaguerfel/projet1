import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output()
  priceRangeChange = new EventEmitter<number[]>();
  priceRange: number[] = [200, 500];  

  


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

    
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
  }

  applyPriceFilter(priceRange: number[]) {
    // Filter products based on the selected price range
    this.filteredProducts = this.Products.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  }
  onPriceFilterChanged(event: { minPrice: number, maxPrice: number }) {
    this.filteredProducts = this.Products.filter(product => {
      const price = product.price; // Assuming you have a 'price' property in your product object
      return price >= event.minPrice && price <= event.maxPrice;
    });
}
}