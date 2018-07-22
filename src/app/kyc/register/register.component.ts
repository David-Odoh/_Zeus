import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Venactive: boolean;
  Copactive: boolean;
  userTypeId = 1;

  constructor() {
  }

  ngOnInit() {
    this.activeCooperator();
  }

  // Require user model
  userModel = new User();

  activeCooperator() {
    this.Copactive = true;
    this.Venactive = false;
    this.userTypeId = 1;
  }

  activeVendor() {
    this.Venactive = true;
    this.Copactive = false;
    this.userTypeId = 2;
  }

  register() {

  }

}
