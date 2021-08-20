import { Component, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
//import { ProjectService } from 'src/app/services/portfolio.service';
import PortfolioModel from 'src/app/models/project.model';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { SwiperOptions } from 'swiper';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.css']
})
export class Carousel3Component implements OnInit {
  projs?: Observable<any>;

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

   
  @Input() flickityConfig: Flickity.Options = {
    groupCells: true,
    cellAlign: 'center',
    pageDots: true,
    draggable: true,
    prevNextButtons: true,
    freeScroll: true,
wrapAround: true
};

  config: SwiperOptions = {
    loop: true,
    init: true,
    effect: 'slide',
    slidesPerView: 1,
    loopedSlides: 6,
    parallax: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      820: {
        slidesPerView: 2,
        loopedSlides: 4,


      }
    },
    spaceBetween: 0
  };  
  constructor(private db: AngularFirestore, config: NgbCarouselConfig) { }

  ngOnInit(): void {
    this.projs = this.db.collection('Projects').valueChanges();

    
  }
  play(): void {
    this.ngxGlide.play();
  }


}
