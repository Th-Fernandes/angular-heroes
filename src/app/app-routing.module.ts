import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { HeroesComponent } from './feature/heroes/heroes.component';
import { SelectedHeroComponent } from './feature/selected-hero/selected-hero.component';
import { JobsPageComponent } from './feature/jobs-page/jobs-page.component';
import { ApplyformComponent } from './feature/applyform/applyform.component';
import { canActivateTeam } from './core/guards/canActivateTeam';
    
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard - AngularHeroes' },
  { path: 'heroes', component: HeroesComponent, title: 'All Heroes - AngularHeroes', canActivate: [canActivateTeam] },
  { path: 'hero/detail/:id', component: SelectedHeroComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'apply', component: ApplyformComponent},
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
