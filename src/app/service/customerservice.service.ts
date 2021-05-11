import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { ICustomer } from 'src/app/shared/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerserviceService {
  getAllUrl: string = 'http://localhost:8085/BankDemoSql/api/customer';
  saveCustUrl: string = 'http://localhost:8085/BankDemoSql/api/customer';
  custLoginUrl: string = 'http://localhost:8085/BankDemoSql/api/customer/login';
  empLoginUrl: string = 'http://localhost:8085/BankDemoSql/emp/emp/login';
  constructor(private http: HttpClient) {}

  getCustomer(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.getAllUrl);
  }
  addCustomer(cData: any) {
    return this.http.post(this.saveCustUrl, cData);
  }
  editCustomer(cData: any) {
    return this.http.put(this.saveCustUrl, cData);
  }
  getCustomerById(id: number) {
    const editUrl = `${this.getAllUrl}/${id}`;
    return this.http.get<ICustomer>(editUrl);
  }
  getCustomerLog(lData: any) {
    return this.http.post(this.custLoginUrl, lData);
  }
  getEmployeeLog(lData: any) {
    return this.http.post(this.empLoginUrl, lData);
  }
}
