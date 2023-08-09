<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
=======
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { LoginService } from '../services/login.service';
>>>>>>> b57257c6aac3fdef2aedb1eb681094996e2bd2f8

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit{
=======
export class HeaderComponent implements OnInit {
    username !:string;
    isLogedIn=false;

>>>>>>> b57257c6aac3fdef2aedb1eb681094996e2bd2f8
    isOpen = false;
  constructor(private LoginService: LoginService) {}

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.isLogedIn=true;
      // @ts-ignore
      this.username=localStorage.getItem('username');
    };
  }

 async logout() {
  await  this.LoginService.logout();
    window.location.reload();}

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
