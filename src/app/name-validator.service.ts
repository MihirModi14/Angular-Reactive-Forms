import { AbstractControl } from '@angular/forms';

export function NamedValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const regex = /^Ayush$/;
  const invalid = regex.test(control.value);
  return invalid ? { invalidName: true } : null;
}