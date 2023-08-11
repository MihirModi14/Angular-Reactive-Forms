import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookingService } from 'src/app/booking.service';
import { Observable, mergeMap, switchMap, exhaustMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validators';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
  ) { } 

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: [{ value: '2', disabled: false }],
      guestEmail: ['', [Validators.required, Validators.email, CustomValidator.validateSpecialChar('-')]],
      bookingAmount: ['',
      {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(4)]
      }],
      mobileNumber: ['',[Validators.required, CustomValidator.vaildateNumber]],
      address: this.fb.group({
        city: [''],
        state: [''],
        country: [''],  
        zipCode: [''],
      }),
      guests: this.fb.array([]),
    },{
      updateOn: 'blur',
      validators:[CustomValidator.validateDate]
    });

    this.bookingForm.controls['guestEmail'].valueChanges.subscribe((data) => {
      console.log(data);
    });

    this.bookingForm.valueChanges.subscribe((data)=>{
      this.bookingService.bookRoom(data).subscribe(() => {});
    });

    this.bookingForm.valueChanges.pipe(
      mergeMap((data: any)=>this.bookingService.bookRoom(data))).subscribe((data)=>{ // parallely make post request
        console.log(data);
    });

    this.bookingForm.valueChanges.pipe(
      switchMap((data: any)=>this.bookingService.bookRoom(data))).subscribe((data)=>{ // can cancel current post request if new request in there
        console.log(data);
    });

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data: any)=>this.bookingService.bookRoom(data))).subscribe((data)=>{ // doesn't call next request if previous is not completed
        console.log(data);
    });
  }

  onSubmit() {
    this.bookingForm.controls['mobileNumber'].setValue('+91 7698509766');
    this.bookingForm.patchValue({ // set value required all value compulsory
      address: {
        zipCode: "394120",
      }
    });
    console.log(this.bookingForm.get('mobileNumber')?.value);
    console.log(this.bookingForm.getRawValue());
  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  addGuest() {
    this.guests?.push(
      this.fb.group({ guestName: ['',[Validators.required]], guestAge: [''] }),
    )
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    this.bookingForm.removeControl('passport');
  }

  removeGuest(index: number) {
    this.guests?.removeAt(index);
  }

}
