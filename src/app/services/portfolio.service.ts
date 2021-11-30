import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import PortfolioModel from '../models/project.model';
import BrandingModel from '../models/projectBranding.model';
import WebsiteModel  from '../models/projectWebsite.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    projectChanges = new Subject<PortfolioModel>();
    projectsChanged = new Subject<PortfolioModel[]>();

    private dataProjects = '/Projects';
    private availableProjects: PortfolioModel[] = [];

    showcaseProjectsRef: AngularFirestoreCollection<PortfolioModel>;

    constructor(private db: AngularFirestore) {
        this.showcaseProjectsRef = db.collection(this.dataProjects, ref => ref.orderBy('hierarchy'));
    }
    getAllProjects(): AngularFirestoreCollection<PortfolioModel> {
        return this.showcaseProjectsRef;
    }
   
    fetchAllProjects() {
        this.db.collection('Projects')
            .snapshotChanges().pipe(
            map(projArray => {
            return projArray.map(doc => {
                const data = doc.payload.doc.data() as PortfolioModel
                return {
                id: doc.payload.doc.id,
                projId: data.projId,
                projClient: data.projClient,
                projMainImage: data.projMainImage,
                projTitle: data.projTitle,
                sliderId: data.sliderId,
                };
            });
        }))
            .subscribe((projects: PortfolioModel[]) => {
                this.availableProjects = projects;
                console.log(this.availableProjects);
                this.projectsChanged.next([...this.availableProjects])
            });
    }
    

}   