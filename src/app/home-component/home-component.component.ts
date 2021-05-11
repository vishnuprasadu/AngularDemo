import { Component, OnInit, TemplateRef } from '@angular/core';
import { CustomerserviceService } from '../service/customerservice.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  p: number = 1;
  customerEdit: any;
  custmerList: any;
  filterVal: string = '';
  modalRef: any;
  constructor(
    private modalService: BsModalService,
    private custSrv: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer() {
    this.custSrv.getCustomer().subscribe((res) => {
      this.custmerList = res;
      console.log(res);
    });
  }
  getcustomerDetail(template: TemplateRef<any>, id: number) {
    this.custSrv.getCustomerById(id).subscribe((res) => {
      console.log(res);
      this.modalRef = this.modalService.show(template);
      this.customerEdit = { ...res };
    });
  }
}
