import {Component, OnInit} from '@angular/core';
import { user } from '../models/User';
import { LoginService } from '../services/login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   registerForm!: FormGroup;

  constructor(private LoginService: LoginService,private formBuilder: FormBuilder,) {}
  ngOnInit() {

    this.registerForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){


     // @ts-ignore
    this.LoginService.login(this.f.username.value, this.f.password.value);
  }

}
