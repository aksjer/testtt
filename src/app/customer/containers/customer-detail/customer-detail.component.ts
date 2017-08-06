import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCustomer from '../../actions';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/customer';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {

  customer$: Observable<Customer>;

  constructor(
    private _store: Store<fromRoot.State>,
    private _activatedRoute: ActivatedRoute
  ) {
    this.customer$ = _store.select(fromRoot.getCustomerEntity);
    const id = this._activatedRoute.snapshot.params['id'];
    _store.dispatch(new fromCustomer.CustomerSelectedLoadAction(id));
  }
}
