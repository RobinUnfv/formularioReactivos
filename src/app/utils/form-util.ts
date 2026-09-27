import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtil {

  private static getTextError(erros: ValidationErrors) {
    for (const key of Object.keys(erros)) {
      //console.log('getFieldErrors => ' + key);
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${erros['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mínimo de ${erros['min'].min}`;
      }
    }
    return null;
  }

  static isValidField(myForm: FormGroup, field: string): boolean | null {
    return !!myForm.controls[field].errors && myForm.controls[field].touched;
  }

  static getFieldErrors(myForm: FormGroup, field: string): string | null {
    if (!myForm.controls[field]) return null;
    const errors = myForm.controls[field].errors ?? {};

    return FormUtil.getTextError(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;
    const errors = formArray.controls[index].errors ?? {};
    return FormUtil.getTextError(errors);
  }



}
