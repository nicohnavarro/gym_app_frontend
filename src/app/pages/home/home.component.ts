import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class HomeComponent implements OnInit {
  slides = [{image: "../../../assets/carousel2.jpg"},{image:"../../../assets/carousel3.jpg"},{image:"../../../assets/carousel1.jpg"}]
  constructor() { }

  ngOnInit(): void {
  }

}
