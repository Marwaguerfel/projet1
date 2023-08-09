import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    username !:string;
    isLogedIn=false;

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

}
