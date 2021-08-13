import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navSpeed: 500,
    slideTransition: 'linear',
    navText: ["<span class='material-icons'>arrow_back</span>", "<span class='material-icons'>arrow_forward</span>"],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      808: {
        items: 1
      },
      940: {
        items: 2
      },
      1200: {
        items: 2
      }
    },
    
  }
  slides = [
    {id: "1", heading: "KrooMeals", subHeading: "Mock-up / Media", route: 'KrooMeals', img: "https://firebasestorage.googleapis.com/v0/b/davoseaworth-3cb21.appspot.com/o/kroo.jpg?alt=media&token=2c867917-3596-4580-9125-5eca334f89fd"},
    {id: "2", heading: "RushRides", subHeading: "App / Website / Media", route: 'RushRides', img: "https://firebasestorage.googleapis.com/v0/b/davoseaworth-3cb21.appspot.com/o/rush.jpg?alt=media&token=c3b50adb-e2ba-4c0b-8343-8228db07ba77"},
    {id: "3", heading: "Azienda Verde", subHeading: "Mock-up / Media", img: "https://firebasestorage.googleapis.com/v0/b/davoseaworth-3cb21.appspot.com/o/azienda.jpg?alt=media&token=f828aa59-265c-4737-8bbb-3676989e65f8"},
    {id: "4", heading: "Kay and Jeff", subHeading: "Mock-up / Media / Branding", img: "https://firebasestorage.googleapis.com/v0/b/davoseaworth-3cb21.appspot.com/o/knj.jpg?alt=media&token=0fd09cee-8c4b-40dc-8f2b-9e0c4b518c5d"},
    {id: "5", heading: "ALIVE Events", subHeading: "Mock-up / Media", img: "https://firebasestorage.googleapis.com/v0/b/davoseaworth-3cb21.appspot.com/o/alive.jpg?alt=media&token=14f3a5f7-ac07-4db1-9d4f-5b46a157eef7"},
    {id: "6", heading: "FastTrack", subHeading: "Mock-up / Branding", img: "https://firebasestorage.googleapis.com/v0/b/davoseaworth-3cb21.appspot.com/o/ft.jpg?alt=media&token=d304a990-de4e-4f67-badd-848bf3e759cc"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
