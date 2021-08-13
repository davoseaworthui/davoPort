import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//component imports
import { HeaderComponent } from "./components/navigation/header/header.component";
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

//material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { CarouselTwoComponent } from './carousel-two/carousel-two.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,

    CarouselModule,
    OwlModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    CarouselComponent,
    CarouselTwoComponent,
    ProfileComponent,
    ShowcaseComponent,
    ProjectDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
