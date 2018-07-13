import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      $("#testi").owlCarousel({
        itemsCustom: [
          [0, 1],
          [600, 1],
          [768, 1]
        ],
        // autoPlay: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navigation: false,
        pagination: true
      });
  }
}
