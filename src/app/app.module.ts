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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { FlickityModule } from 'ngx-metafizzy-flickity';


//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { CarouselTwoComponent } from './carousel-two/carousel-two.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { SlugPipe } from './customPipes/slug.pipe';



//services
//import { ProjectService } from './services/portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    CarouselComponent,
    CarouselTwoComponent,
    ProfileComponent,
    ShowcaseComponent,
    SlugPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    NgbModule,
    FlickityModule,

    CarouselModule,
    OwlModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
