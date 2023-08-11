import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NamedValidator } from '../name-validator.service';

interface EmployeeForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  constructor(private fb: FormBuilder) {}

  employeeForm: FormGroup = this.fb.group<EmployeeForm>({
    firstName: this.fb.control('Mihir', {
      nonNullable: true,
      validators: [Validators.required, NamedValidator],
    }),
    lastName: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  ngOnInit() {
    // ------------------------------ Add, Remove or Replace validators ------------------------------
    // this.employeeForm.controls['lastName'].setValidators([Validators.minLength(5), Validators.required]);
    // this.employeeForm.controls['lastName'].addValidators(Validators.minLength(5));
    // this.employeeForm.controls['lastName'].removeValidators(Validators.minLength(5));
    // this.employeeForm.controls['lastName'].clearValidators();

    // ------------------------------ Add Remove Control from form ------------------------------
    // this.employeeForm.addControl('age',this.fb.control(''));
    // this.employeeForm.removeControl('lastName');
    
    // ------------------------------ Form Events (ValueChanges, StatusChanges) ------------------------------
    // this.employeeForm.controls['lastName'].valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    
    // this.employeeForm.controls['lastName'].statusChanges.subscribe((status) => {
    //   if(status == "INVALID") {
    //     console.log(status);
    //   }
    // });
  }

  onSubmit() {
    // ------------------------------ Set Value vs Patch Value ------------------------------
    // this.employeeForm.patchValue({firstName: "Mihir"});
    // this.employeeForm.setValue({firstName: "Mihir", lastName: "Modi"});

    // ------------------------------ Status Variables ------------------------------
    // console.log(this.employeeForm.controls['lastName'].dirty);
    // console.log(this.employeeForm.controls['lastName'].touched);

    // ------------------------------ Disble Form Control with getRawValue() Function ------------------------------
    // this.employeeForm.controls['lastName'].disable();
    // console.log(this.employeeForm.controls['lastName'].disabled);
    // console.log(this.employeeForm.getRawValue());

    // ------------------------------ Reset Form with nonNullable Property ------------------------------
    // this.employeeForm.reset();
    console.log(this.employeeForm.value);
  }
}
