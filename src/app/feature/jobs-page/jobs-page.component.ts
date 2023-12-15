import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchService } from 'src/app/core/services/user-search.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
})
export class JobsPageComponent implements OnInit {
  constructor(
    private userSearch: UserSearchService,
    private http: HttpClient
  ) {}

  jobs: Hero[] = []
  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' })

  ngOnInit() {
    this.userSearch.searchEntry2.subscribe(values => this.jobs = values)
    // this.getAvailableJobs().subscribe(res => this.jobs.push(...res))

    // this.userSearch.whenSearchEntryChanges().subscribe(searchEntry => {

    //   console.log('using method ', searchEntry)
    // })
  }

  getAvailableJobs():Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes')
  }
}
