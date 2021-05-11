import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css'],
})
export class EmpLoginComponent implements OnInit {
  customer: any;
  loginCustomer: any;
  RegMobile = /^[0-9]{10,12}$/;
  constructor(
    private _router: Router,
    private custSrv: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.customer = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ShowValue(val: any) {
    console.log(val);
    const embObj = {
      id: 1,
      name: val.name,
      password: val.password,
    };
    this.custSrv.getEmployeeLog(embObj).subscribe((res) => {
      console.log(res);
      
      this.loginCustomer = { ...res };
      if (res != null) {
        alert('Successfully Loggedv in!!!');
        this._router.navigate(['/home']);
      } else {
        alert('Login Credentials does not match.. Please try again!!');
      }
    });
  }
}
