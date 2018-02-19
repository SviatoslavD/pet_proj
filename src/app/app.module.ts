import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
 
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './heroDetail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './heroSearch/hero-search.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProfileComponent } from './profile/profile.component';

import { HeroService } from './services/hero.service';
import { WindowRef } from './services/window-ref.service';

import { SideNav } from './sideNav/side-nav.component';
import { IconBar } from './iconBar/icon-bar.component';
import { ProgressBar } from './progressBar/progress-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ExperiencesComponent,
    ProfileComponent,
    SideNav,
    IconBar,
    ProgressBar
  ],
  providers: [ HeroService, WindowRef ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
