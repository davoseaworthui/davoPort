import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-two',
  templateUrl: './carousel-two.component.html',
  styleUrls: ['./carousel-two.component.css']
})
export class CarouselTwoComponent implements OnInit {

  constructor() { }
  children = [{ title: "Child 1" }, { title: "Child 2" }, { title: "Child 3" }];

  ngOnInit(): void {
  }

}
