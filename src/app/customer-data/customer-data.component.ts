import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css'],
})
export class CustomerDataComponent implements OnInit {
  loginCustomer: any;
  modalRef: any;
  depositAmount: number = 0;
  withdrawAmount: number = 0;
  totalBal: number = 0;
  id: number = 0;
  constructor(
    private modalService: BsModalService,
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private custSrv: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'));
      this.getcustomerDetail(this.id);
    });
  }
  depostModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  withdrawModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  addDeposit() {
    this.totalBal =
      parseInt(this.loginCustomer.balanceAmount) + this.depositAmount;
    const customerObj = {
      id: this.id,
      name: this.loginCustomer.name,
      email: this.loginCustomer.email,
      password: this.loginCustomer.password,
      mobile: this.loginCustomer.mobile,
      state: this.loginCustomer.state,
      city: this.loginCustomer.city,
      pin: this.loginCustomer.pin,
      accType: this.loginCustomer.accType,
      status: this.loginCustomer.status,
      balanceAmount: this.totalBal,
      createDate: this.loginCustomer.createDate,
    };

    this.custSrv.editCustomer(customerObj).subscribe(() => {
      this.cancelTran();
      this.getcustomerDetail(this.id);
    });
  }
  addWihdraw() {
    const availBal = parseInt(this.loginCustomer.balanceAmount);
    if (this.withdrawAmount <= availBal) {
      this.totalBal =
        parseInt(this.loginCustomer.balanceAmount) - this.withdrawAmount;
      const customerObj = {
        id: this.id,
        name: this.loginCustomer.name,
        email: this.loginCustomer.email,
        password: this.loginCustomer.password,
        mobile: this.loginCustomer.mobile,
        state: this.loginCustomer.state,
        city: this.loginCustomer.city,
        pin: this.loginCustomer.pin,
        accType: this.loginCustomer.accType,
        status: this.loginCustomer.status,
        balanceAmount: this.totalBal,
        createDate: this.loginCustomer.createDate,
      };
      this.custSrv.editCustomer(customerObj).subscribe(() => {
        this.cancelTran();
        this.getcustomerDetail(this.id);
      });
    }
    else{
      alert("Insufficient Balance ")
    }
  }

  cancelTran() {
    this.depositAmount = 0;
    this.withdrawAmount = 0;
    this.totalBal = 0;
    this.modalRef.hide();
  }
  getcustomerDetail(id: number) {
    this.custSrv.getCustomerById(id).subscribe((res) => {
      console.log(res);
      this.loginCustomer = { ...res };
      console.log(this.loginCustomer);
    });
  }
}
