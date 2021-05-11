import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  customer: any;
  isChecked: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;
  RegName = /^[a-zA-Z ]{3,25}$/;
  RegMail = /^[a-z0-9.%+-]+@([a-z0-9.]{5})+.[a-z]{2,4}$/;
  RegMobile = /^[0-9]{10,12}$/;
  error: any;
  constructor(
    private _router: Router,
    private custSrv: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.customer = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.RegName),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.RegMail),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(this.RegMobile),
      ]),
      password: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required]),
      accType: new FormControl('', [Validators.required]),
      balanceAmount: new FormControl(''),
    });
  }
  ShowValue(val: any) {
    console.log(val);
    const customerObj = {
      name: val.name,
      email: val.email,
      password: val.password,
      mobile: val.mobile,
      state: val.state,
      city: val.city,
      pin: val.pin,
      accType: val.accType,
      status: 'Active',
      balanceAmount: val.balanceAmount ? val.balanceAmount : 0,
    };
    this.custSrv.addCustomer(customerObj).subscribe((res) => {
      if (res != null) {
        alert('Registration Successfull!!!');
        this._router.navigate(['/home']);
      } else {
        alert('Registration Failed Mobile Number already exists!!!');
      }
    });
  }
  cancel() {
    this._router.navigate(['/home']);
  }
}
