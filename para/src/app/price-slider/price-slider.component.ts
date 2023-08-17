import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent  {
  minPrice: number | null = null;
  maxPrice: number | null = null;

  @Output() 
  priceFilterChanged = new EventEmitter<{ minPrice: number, maxPrice: number }>();

  applyFilter() {
    this.priceFilterChanged.emit({ minPrice: this.minPrice || 0, maxPrice: this.maxPrice || Infinity });
  }
  
}