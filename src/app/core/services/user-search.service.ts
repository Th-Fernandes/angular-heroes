import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  constructor( private formBuilder: FormBuilder,) {}

  searchEntry = this.formBuilder.control('');

  whenSearchEntryChanges(): Observable<string | null> {
    return this.searchEntry.valueChanges
  }
}
