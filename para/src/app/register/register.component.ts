import {Component, OnInit} from '@angular/core';
import { user } from '../models/User';
import { LoginService } from '../services/login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private LoginService: LoginService,private formBuilder: FormBuilder,) {}
  ngOnInit() {

    this.registerForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password_repeat: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {


    // @ts-ignore
    this.LoginService.signup(this.f.username.value, this.f.password.value, this.f.password_repeat.value, this.f.email.value);
  }

}
