import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PostsVideosComponent } from './posts-videos/posts-videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'posts-videos', component: PostsVideosComponent },
  { path: 'contactMe', component: ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
