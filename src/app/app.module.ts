import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './feature/heroes/heroes.component';
import { SelectedHeroComponent } from './feature/selected-hero/selected-hero.component';
import { HeroesLiComponent } from './feature/heroes-li/heroes-li.component';
import { MessagesComponent } from './feature/messages/messages.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { TopNavComponent } from './core/layout/top-nav/top-nav.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/core/services/in-memory-data.service';
import { HeroSearchComponent } from './feature/hero-search/hero-search.component';
import { JobsPageComponent } from './feature/jobs-page/jobs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SelectedHeroComponent,
    HeroesLiComponent,
    MessagesComponent,
    DashboardComponent,
    TopNavComponent,
    HeroSearchComponent,
    JobsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
