import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvalidInputMessageComponent } from '../invalid-input-message/invalid-input-message.component';

@Component({
  standalone: true,
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  imports: [ReactiveFormsModule, NgIf, InvalidInputMessageComponent],
})
export class ApplyformComponent {
  constructor(private formBuilder: FormBuilder) {}
  
  applyInfoForm = this.formBuilder.group({
    personalInfo: this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      country: 'BR',
      state: '',
      phoneNumber: '',
      money: 'USD',
      wageType: ['gross', Validators.pattern(/gross|net/)],
      wageRange: '',
      englishLevel: null,
    }),
    mainSkills: this.formBuilder.array([
      new FormControl('', [Validators.required, Validators.minLength(1)]),
      new FormControl('', [Validators.required, Validators.minLength(1)]),
      new FormControl('', [Validators.required, Validators.minLength(1)]),
    ], [Validators.minLength(3)])
  })

  // isInputInvalid(query: string): boolean {
  //   const input = this.applyInfoForm.get(query);

  //   if(input?.invalid && input.dirty) return true
  //   return false
  // }

  onSubmit() {
    console.log(this.applyInfoForm.value)
  }
}
