import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCustomer from '../../actions';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers$: Observable<Customer[]>;

  constructor(
    private _store: Store<fromRoot.State>
  ) {
    this.customers$ = _store.select(fromRoot.getCustomerEntities);
    _store.dispatch(new fromCustomer.CustomerLoadAction());
  }

}
