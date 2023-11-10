import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { SelectedHeroComponent } from './selected-hero/selected-hero.component';
import { HeroesLiComponent } from './heroes-li/heroes-li.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SelectedHeroComponent,
    HeroesLiComponent,
    MessagesComponent,
    DashboardComponent,
    TopNavComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'heroes', component: HeroesComponent }
    ]) ,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
