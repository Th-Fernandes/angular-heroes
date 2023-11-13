import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SelectedHeroComponent } from './selected-hero/selected-hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard - AngularHeroes' },
  { path: 'heroes', component: HeroesComponent, title: 'All Heroes - AngularHeroes' },
  { path: 'hero/detail/:id', component: SelectedHeroComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }