import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtil } from '../../../utils/form-util';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.html',
})
export class SwitchesPage {
  private fb = inject(FormBuilder);
  formUtil = FormUtil;

  myFrom: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true],
    termiCondiciones: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    this.myFrom.markAllAsTouched();
    console.log(this.myFrom.value);
  }
}
