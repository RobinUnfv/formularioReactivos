import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export class BasicPage {
  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorege: [0, Validators.required],
  });

  isValidField(field: string): boolean | null {
    return !!this.myForm.controls[field].errors;
  }

  getFieldErrors(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors ?? {};

    for (const key of Object.keys(errors)) {
      console.log("getFieldErrors => " +key);
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
      }
    }
    return null;
  }

}
