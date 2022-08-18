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
  temppackage = '';
  totalAmount = 0;

  constructor(private pappointFormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  setPackage() {
    if (this.pappointForm.controls[`Sessions4Appointment`].value !== '') {
      console.log('Session 4');
      this.temppackage =
        this.pappointForm.controls[`Sessions4Appointment`].value;
    } else if (this.pappointForm.controls[`oneTimeAppointment`].value !== '') {
      this.temppackage = this.pappointForm.controls[`oneTimeAppointment`].value;
    } else if (
      this.pappointForm.controls[`Sessions5Appointment`].value !== ''
    ) {
      this.temppackage =
        this.pappointForm.controls[`Sessions5Appointment`].value;
    }
  }

  submitappointment() {
    console.log('Submit method called');
    this.setPackage();
    console.log(this.pappointForm.controls[`oneTimeAppointment`].value);

    console.log('temp package ' + this.temppackage);
    this.setPackage();
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
      package: this.temppackage,
    };
    console.log(
      typeof this.pappointForm.controls[`Sessions4Appointment`].value
    );

    console.log(appoint.package);
  }

  secondPackage() {
    if (this.pappointForm.controls[`Sessions5Appointment`].value !== '') {
      this.thirdPackage();
      return;
    }
    this.totalAmount = 0;
    if (this.pappointForm.controls[`yesP`].value !== '') {
      this.totalAmount += 200;
    }
    let weeks = this.pappointForm.controls[`weeks`].value;
    this.totalAmount = this.totalAmount + 4 * weeks * 400;
    this.pappointForm.controls[`amount`].setValue(this.totalAmount);
  }

  thirdPackage() {
    this.totalAmount = 0;
    if (this.pappointForm.controls[`yesP`].value !== '') {
      this.totalAmount += 200;
    }
    let weeks = this.pappointForm.controls[`weeks`].value;
    this.totalAmount = this.totalAmount + 5 * weeks * 300;
    this.pappointForm.controls[`amount`].setValue(this.totalAmount);
  }

  firstPackage() {
    this.totalAmount = 0;
    this.pappointForm.controls[`weeks`].disable;
    this.pappointForm.controls[`weeks`].setValue(1);
    if (this.pappointForm.controls[`yesP`].value !== '') {
      this.totalAmount += 200;
    }
    this.totalAmount += 500;
    this.pappointForm.controls[`amount`].setValue(this.totalAmount);
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
      oneTimeAppointment: [{ value: '', disabled: false }],
      Sessions4Appointment: [{ value: '', disabled: false }],
      Sessions5Appointment: [{ value: '', disabled: false }],
      amount: [{ value: '', disabled: false }],
      weeks: [{ value: '', disabled: false }],
    });
  }
}
