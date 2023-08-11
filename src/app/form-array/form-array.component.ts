import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: 'form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  userForm = this.formBuilder.group({
    usersArray: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder) { }

  get userArrayControls() {
    return (this.userForm.get('usersArray') as FormArray).controls;
  }

  addUser() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      const userFormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        age: ['', [Validators.required]],
      });

      (this.userForm.get('usersArray') as FormArray).push(userFormGroup);
    }
  }

  removeUser(index: number) {
    (this.userForm.get('usersArray') as FormArray).removeAt(index);
  }

  onSubmit() {
    this.userForm.markAllAsTouched();
    console.log('users : ', this.userForm.value.usersArray);
  }
}
