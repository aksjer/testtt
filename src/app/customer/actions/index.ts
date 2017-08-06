import { Action } from '@ngrx/store';
import { Customer } from '../models/customer';

export const CUSTOMER_LOAD = '[Customer] Load';
export const CUSTOMER_LOAD_SUCCESS = '[Customer] Load Success';
export const CUSTOMER_SELECTED_LOAD = '[Customer] Selected Load';
export const CUSTOMER_SELECTED_LOAD_SUCCESS = '[Customer] Selected Load Success';

export class CustomerLoadAction implements Action {
  readonly type = CUSTOMER_LOAD;
}

export class CustomerLoadSuccessAction implements Action {
  readonly type = CUSTOMER_LOAD_SUCCESS;
  constructor(public payload: Customer[]) { }
}

export class CustomerSelectedLoadAction implements Action {
  readonly type = CUSTOMER_SELECTED_LOAD;
  constructor(public payload: number) { }
}

export class CustomerSelectedLoadSuccessAction implements Action {
  readonly type = CUSTOMER_SELECTED_LOAD_SUCCESS;
  constructor(public payload: Customer) { }
}

export type Actions = CustomerLoadAction
  | CustomerLoadSuccessAction
  | CustomerSelectedLoadAction
  | CustomerSelectedLoadSuccessAction;
