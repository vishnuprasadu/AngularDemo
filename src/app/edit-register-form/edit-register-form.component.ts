import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-edit-register-form',
  templateUrl: './edit-register-form.component.html',
  styleUrls: ['./edit-register-form.component.css'],
})
export class EditRegisterFormComponent implements OnInit {
  customer: any;
  customerEdit: any;
  isChecked: boolean = false;
  RegName = /^[a-zA-Z ]{3,25}$/;
  RegMail = /^[a-z0-9.%+-]+@([a-z0-9.]{5})+.[a-z]{2,4}$/;
  RegMobile = /^[0-9]{10,12}$/;
  id: number = 0;
  constructor(
    private _activateRoute: ActivatedRoute,
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
      status: new FormControl(''),
    });
    this._activateRoute.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'));
      this.getcustomerDetail(this.id);
    });
  }
  ShowValue(val: any) {
    console.log(val);
    const customerObj = {
      id: this.id,
      name: val.name,
      email: val.email,
      password: val.password,
      mobile: val.mobile,
      state: val.state,
      city: val.city,
      pin: val.pin,
      accType: val.accType,
      status: val.status,
      balanceAmount: this.customerEdit.balanceAmount,
      createDate: this.customerEdit.createDate,
    };
    this.custSrv.editCustomer(customerObj).subscribe(() => {
      this._router.navigate(['/home']);
    });
  }
  cancel() {
    this._router.navigate(['/home']);
  }
  getcustomerDetail(id: number) {
    this.custSrv.getCustomerById(id).subscribe((res) => {
      console.log(res);
      this.customerEdit = { ...res };
    });
  }
}
