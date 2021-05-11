import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  customer: any;
  loginCustomer: any;
  RegMobile = /^[0-9]{10,12}$/;
  constructor(
    private _router: Router,
    private custSrv: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.customer = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(this.RegMobile),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ShowValue(val: any) {
    console.log(val);
    const custLog = {
      mobile: val.mobile,
      password: val.password,
    };
    this.custSrv.getCustomerLog(custLog).subscribe((res) => {
      this.loginCustomer = { ...res };
      if (res != null) {
        alert('Successfully Loggedv in!!!');
        this._router.navigate(['/customer', this.loginCustomer.id]);
      } else {
        alert('Login Credentials does not match.. Please try again!!');
      }
    });
  }
}
