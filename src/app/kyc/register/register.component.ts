import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Venactive: boolean;
  Copactive: boolean;

  constructor() { }

  ngOnInit() {
    this.activeCooperator();
  }

  activeCooperator() {
    this.Copactive = true;    
    this.Venactive = false;
  }

  activeVendor() {
    this.Venactive = true;
    this.Copactive = false;
  }

}
