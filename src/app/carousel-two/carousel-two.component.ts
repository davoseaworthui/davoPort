import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/portfolio.service';
import PortfolioModel from 'src/app/models/project.model';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-carousel-two',
  templateUrl: './carousel-two.component.html',
  styleUrls: ['./carousel-two.component.css']
})
export class CarouselTwoComponent implements OnInit {
  projects?: PortfolioModel[];


  constructor(private showcaseProjects: ProjectService, private db: AngularFirestore) { }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  currentProject: PortfolioModel[] = [];
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
   // this.initializeProjects();
    //this.db.collection('Projects').valueChanges().subscribe(x => (console.log(x)));
    this.getAllProjects();

  }

  getAllProjects() {
    this.showcaseProjects.getAllCurrentProjects().pipe(takeUntil (this.unsubscribe$))
    .subscribe(result => { this.currentProject = result});
  }
  /* initializeProjects(): void {
    this.showcaseProjects.getAllProjects().snapshotChanges().pipe(
        map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data()})
        ))
      )
      .subscribe(data => { this.projects = data; });
      console.log(this.projects);
  } */

}
