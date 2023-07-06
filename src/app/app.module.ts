import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

 

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    TeachingComponent,
    PublicationsComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
