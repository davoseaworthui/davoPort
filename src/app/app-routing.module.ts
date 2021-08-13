import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselTwoComponent } from './carousel-two/carousel-two.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'works', component: ShowcaseComponent },
  { path: 'carousel2', component: CarouselTwoComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
