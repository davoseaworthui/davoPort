import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
// import { ProjectService } from 'src/app/services/portfolio.service';
import PortfolioModel from 'src/app/models/project.model';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  projects?: PortfolioModel[];
  projs?: Observable<PortfolioModel[]>;
  projectId!: string;

  activeSlides?: SlidesOutputData;


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
        items: 2
      },
      808: {
        items: 2
      },
      940: {
        items: 2
      },
      1200: {
        items: 2
      }
    },
    
  } 

  constructor( private db: AngularFirestore) { }

  currentProject: PortfolioModel[] = [];
  private unsubscribe$ = new Subject<void>();


  ngOnInit() {
    // this.projs = this.db.collection('Projects').valueChanges();
    this.projs = this.db.collection('Projects')
    .snapshotChanges().pipe(
    map(projArray => {
      return projArray.map(doc => {
        const data = doc.payload.doc.data() as PortfolioModel
        return {
          id: doc.payload.doc.id,
          projId: data.projId,
          projClient: data.projClient,
          projMainImage: data.projMainImage,
          projTitle: data.projTitle
        };
      });
    }));
    this.projectId = this.projectId;
   // this.initializeProjects();
  }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }


  /*getAllProjects() {
    this.showcaseProjects.getAllCurrentProjects().pipe(takeUntil (this.unsubscribe$))
    .subscribe(result => { this.currentProject = result});
  }

   initializeProjects(): void {
    this.showcaseProjects.getAllProjects().snapshotChanges().pipe(
        map(changes => changes.map(c => ({ projId: c.payload.doc.id, ...c.payload.doc.data()})
        ))
      )
      .subscribe(data => { this.projects = data; });
      console.log(this.projects);
  } */
}
