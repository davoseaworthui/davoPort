import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import PortfolioModel from '../models/project.model';
import BrandingModel from '../models/projectBranding.model';
import WebsiteModel  from '../models/projectWebsite.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private dataProjects = '/Projects';

    showcaseProjectsRef: AngularFirestoreCollection<PortfolioModel>;

    constructor(private db: AngularFirestore) {
        this.showcaseProjectsRef = db.collection(this.dataProjects, ref => ref.orderBy('hierarchy'));
    }
    getAllProjects(): AngularFirestoreCollection<PortfolioModel> {
        return this.showcaseProjectsRef;
    }
    getAllCurrentProjects(): Observable<PortfolioModel[]>{
        const currentProjects = this.db.collection<PortfolioModel>('Projects', ref => ref.orderBy('projTitle'))
        .snapshotChanges().pipe(
            map(actions => {
                return actions.map(
                    c => ({
                        projId: c.payload.doc.id,
                        ...c.payload.doc.data()
                    })
                );
            })
        );
        return currentProjects;
    }
    

}   