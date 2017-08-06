import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as fromCustomer from '../actions';
import * as fromLayout from '../../core/layout/actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Observable } from "rxjs/Observable";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../models/customer";

@Injectable()
export class CustomerEffects {

  constructor(
    private _actions$: Actions,
    private _customerService: CustomerService
  ) { }

  @Effect()
  customersLoad$: Observable<Action> = this._actions$
    .ofType(fromCustomer.CUSTOMER_LOAD)
    .switchMap(() => this._customerService.getAll())
    .map((customers: Customer[]) => new fromCustomer.CustomerLoadSuccessAction(customers));

  @Effect()
  customerLoad$: Observable<Action> = this._actions$
    .ofType(fromCustomer.CUSTOMER_SELECTED_LOAD)
    .map(toPayload)
    .switchMap((id: number) => this._customerService.get(id))
    .map((customer: Customer) => new fromCustomer.CustomerSelectedLoadSuccessAction(customer));

  @Effect()
  loadingBarOn$: Observable<Action> = this._actions$
    .ofType(fromCustomer.CUSTOMER_LOAD, fromCustomer.CUSTOMER_SELECTED_LOAD)
    .map(() => new fromLayout.LoadingBarOnAction());

  @Effect()
  loadingBarOff$: Observable<Action> = this._actions$
    .ofType(fromCustomer.CUSTOMER_LOAD_SUCCESS, fromCustomer.CUSTOMER_SELECTED_LOAD_SUCCESS)
    .map(() => new fromLayout.LoadingBarOffAction());

}