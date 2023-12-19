import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
})
export class FilterJobsComponent {
  filtersInputs = this.formBuilder.group({
    salaryRange: '',
    positionLevel: '',
    opportunityType: ''
  })

  constructor(private formBuilder:FormBuilder) {}

  onSubmit() {
    console.log(this.filtersInputs.value)
  }
}
