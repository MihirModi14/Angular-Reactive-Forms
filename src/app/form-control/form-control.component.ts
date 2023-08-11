import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  template: `
    <mat-form-field appearance="fill" floatLabel="always">
      <mat-label>Email</mat-label>
      <input type="text" placeholder="Email" [formControl]="emailControl" matInput>
    </mat-form-field>

    <button type="submit" mat-raised-button color="primary" (click)="onSubmit()">Submit</button>
    `,
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  
  constructor(private formBuilder: FormBuilder) {}

  emailControl = this.formBuilder.control('');

  onSubmit() {
    console.log('Email:', this.emailControl.value);
  }
}
