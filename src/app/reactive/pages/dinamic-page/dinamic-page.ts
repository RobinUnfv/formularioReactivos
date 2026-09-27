import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtil } from '../../../utils/form-util';

@Component({
  selector: 'app-dinamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dinamic-page.html',
})
export class DinamicPage {
  private fb = inject(FormBuilder);
  formUtil = FormUtil;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    juegoFavoritos: this.fb.array(
      [
        ['Mario Bros', [Validators.required]],
        ['Piedra Blanck', [Validators.required]],
      ],
      Validators.minLength(2),
    ),
  });

  newJuegoFavorito = new FormControl('', [Validators.required]);

  get juegoFavorito() {
    return this.myForm.get('juegoFavoritos') as FormArray;
  }

  onAddToFavorito() {
    console.log('AddToFavorito');
    if (this.newJuegoFavorito.invalid) return;
    const newJuego = this.newJuegoFavorito.value;
    this.juegoFavorito.push(this.fb.control(newJuego, Validators.required));
    this.newJuegoFavorito.reset();
  }

  onDeleteJuevoFavorito(index: number) {
    this.juegoFavorito.removeAt(index)
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
