import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './register-page.html'
})
export class RegisterPage {

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required]],
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]]
  });

}
