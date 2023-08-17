import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  onSelectCategory(category: string): void {
    this.categorySelected.emit(category);
  }

}
