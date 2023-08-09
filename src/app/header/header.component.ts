import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    isOpen = false;
  
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
    categories: Category[] = [];
    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
      this.getCategories().subscribe(categories => {
        this.categories = categories;
      });
    }
  
    getCategories() {
      return this.categoryService.getCategories();
    }

}
