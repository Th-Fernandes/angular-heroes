import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
})
export class FilterJobsComponent {
  @Input() fetchedJobs!: (Hero | null)[]

  filtersInputs = this.formBuilder.group({
    salaryRange: '',
    positionLevel: '',
    opportunityType: ''
  })

  constructor(private formBuilder:FormBuilder) {}

  onSubmit() {
    console.log(this.filtersInputs.value)
    console.log(this.fetchedJobs)
  }
}
