import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as fromCustomer from '../../../customer/actions';
import * as fromLayout from '../actions';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LayoutEffects {

  constructor(
    private _actions$: Actions,
  ) { }

  @Effect()
  loadingBarOn$: Observable<Action> = this._actions$
    .ofType(fromCustomer.CUSTOMER_LOAD, fromCustomer.CUSTOMER_SELECTED_LOAD)
    .map(() => new fromLayout.LoadingBarOnAction());

  @Effect()
  loadingBarOff$: Observable<Action> = this._actions$
    .ofType(fromCustomer.CUSTOMER_LOAD_SUCCESS, fromCustomer.CUSTOMER_SELECTED_LOAD_SUCCESS)
    .map(() => new fromLayout.LoadingBarOffAction());

}