import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from 'src/interfaces/company';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
})
export class JobsPageComponent implements OnInit {
  companies!: Company[]

  ngOnInit(): void {
    this.getCompanies()
      .subscribe(companies => {
        console.log(companies)
        this.companies = companies
      })
  }

  private getCompanies(): Observable<Company[]> {
    const companies: Company[] = [
      {
        companyName: 'Info jobs',
        jobs: [{
          title: 'frontend dev',
          locality: 'Rio de janeiro',
          technicalSkills: ['CSS', 'HTML', 'javascript']
        }, {
          title: 'backend dev',
          locality: 'Sao paulo',
          technicalSkills: ['node', 'typescript']
        }]
      }, {
        companyName: 'High tech',
        jobs: [{
          title: 'devops',
          locality: 'remote',
          technicalSkills: ['docker']
        }]
      }
    ]

    return of(companies)
  }

  getJobsTechnicalSkills(company: Company) {
    let technicalSkills: string[][] = [];

    company.jobs.forEach(job => technicalSkills.push(job.technicalSkills));

    return technicalSkills;
  }
}
