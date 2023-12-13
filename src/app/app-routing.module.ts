import { Injectable, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { HeroesComponent } from './feature/heroes/heroes.component';
import { SelectedHeroComponent } from './feature/selected-hero/selected-hero.component';
import { JobsPageComponent } from './feature/jobs-page/jobs-page.component';
import { PermissionsService } from './core/services/permissions.service';


const canActivateTeam: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      console.log(route)
      return inject(PermissionsService).canActivate();
    };
    
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard - AngularHeroes' },
  { path: 'heroes', component: HeroesComponent, title: 'All Heroes - AngularHeroes', canActivate: [canActivateTeam] },
  { path: 'hero/detail/:id', component: SelectedHeroComponent },
  { path: 'jobs', component: JobsPageComponent}
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
