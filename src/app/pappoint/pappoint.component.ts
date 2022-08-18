import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appointmentmodel } from '../Model/pappoint';

@Component({
  selector: 'app-pappoint',
  templateUrl: './pappoint.component.html',
  styleUrls: ['./pappoint.component.css'],
})
export class PappointComponent implements OnInit {
  pappointForm!: FormGroup;
  appointment!: appointmentmodel;

  constructor(private pappointFormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  submitappointment() {
    console.log('Submit method called');
    var appoint: appointmentmodel = {
      name: this.pappointForm.controls[`name`].value,
      age: this.pappointForm.controls[`age`].value,
      email: this.pappointForm.controls[`email`].value,
      phone: this.pappointForm.controls[`phone`].value,
      address1: this.pappointForm.controls[`address1`].value,
      address2: this.pappointForm.controls[`address2`].value,
      city: this.pappointForm.controls[`city`].value,
      state: this.pappointForm.controls[`state`].value,
      country: this.pappointForm.controls[`country`].value,
      pinCode: this.pappointForm.controls[`pincode`].value,
      femaleTrainer: this.pappointForm.controls[`femaleTrainer`].value,
      maleTrainer: this.pappointForm.controls[`maleTrainer`].value,
      noPreference: this.pappointForm.controls[`noPreference`].value,
      yesP: this.pappointForm.controls[`yesP`].value,
      noP: this.pappointForm.controls[`noP`].value,
    };
    console.log(appoint.age);
  }

  createForm() {
    this.pappointForm = this.pappointFormBuilder.group({
      name: [{ value: '', disabled: false }, [Validators.required]],
      age: [{ value: '', disabled: false }, [Validators.required]],
      email: [{ value: '', disabled: false }, [Validators.required]],
      phone: [{ value: '', disabled: false }, [Validators.required]],
      address1: [{ value: '', disabled: false }, [Validators.required]],
      address2: [{ value: '', disabled: false }, [Validators.required]],
      city: [{ value: '', disabled: false }, [Validators.required]],
      state: [{ value: '', disabled: false }, [Validators.required]],
      country: [{ value: '', disabled: false }, [Validators.required]],
      pincode: [{ value: '', disabled: false }, [Validators.required]],
      maleTrainer: [{ value: '', disabled: false }],
      femaleTrainer: [{ value: '', disabled: false }],
      noPreference: [{ value: '', disabled: false }],
      yesP: [{ value: '', disabled: false }],
      noP: [{ value: '', disabled: false }],
    });
  }
}
