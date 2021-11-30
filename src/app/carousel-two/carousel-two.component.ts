import { Component, OnDestroy, OnInit, Input } from '@angular/core';
//import { ProjectService } from 'src/app/services/portfolio.service';
import PortfolioModel from 'src/app/models/project.model';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-carousel-two',
  templateUrl: './carousel-two.component.html',
  styleUrls: ['./carousel-two.component.css']
})
export class CarouselTwoComponent implements OnInit {

  @Input() flickityConfig: Flickity.Options = {
    groupCells: true,
    cellAlign: 'center',
    pageDots: true,
    draggable: true,
    prevNextButtons: true,
};
  projects?: PortfolioModel[];
  projs?: Observable<any>;

  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  children = [{ title: "Child 1" }, { title: "Child 2" }, { title: "Child 3" }];


  constructor( private db: AngularFirestore, config: NgbCarouselConfig) { 
     // customize default values of carousels used by this component tree
     config.showNavigationArrows = true;
     config.showNavigationIndicators = true;
     config.interval = 0;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  currentProject: PortfolioModel[] = [];
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.projs = this.db.collection('Projects').valueChanges();

   // this.initializeProjects();
    //this.db.collection('Projects').valueChanges().subscribe(x => (console.log(x)));
    //this.getAllProjects();

  }

  /* getAllProjects() {
    this.showcaseProjects.getAllCurrentProjects().pipe(takeUntil (this.unsubscribe$))
    .subscribe(result => { this.currentProject = result});
  }
  initializeProjects(): void {
    this.showcaseProjects.getAllProjects().snapshotChanges().pipe(
        map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data()})
        ))
      )
      .subscribe(data => { this.projects = data; });
      console.log(this.projects);
  } */

}
