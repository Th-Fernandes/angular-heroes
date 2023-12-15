import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  constructor( private formBuilder: FormBuilder,) {}

  searchEntry = this.formBuilder.control('');

}
