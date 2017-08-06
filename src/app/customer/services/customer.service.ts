import { Injectable } from '@angular/core';
import { Customer } from "../models/customer";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';

@Injectable()
export class CustomerService {

  constructor() { }

  fakeCustomers: Customer[] = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'marley' }
  ];
  fakeDelay = 1500;

  getAll(): Observable<Customer[]> {
    return Observable
      .of(this.fakeCustomers)
      .delay(this.fakeDelay);
  }

  get(id: number): Observable<Customer> {
    return Observable
      .from(this.fakeCustomers)
      .delay(this.fakeDelay)
      .filter((customer: Customer) => customer.id == id);
  }

}
