import { Customer } from "../models/customer";
import * as fromCustomer from '../actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  customers: Customer[];
  customer: Customer;
}

const initialState: State = {
  customers: [],
  customer: null
};

export const reducer = (state: State = initialState, action: fromCustomer.Actions): State => {
  switch (action.type) {
    case fromCustomer.CUSTOMER_LOAD:
      return { ...state, customers: [] };
    case fromCustomer.CUSTOMER_LOAD_SUCCESS:
      return { ...state, customers: action.payload };
    case fromCustomer.CUSTOMER_SELECTED_LOAD:
      return { ...state, customer: null };
    case fromCustomer.CUSTOMER_SELECTED_LOAD_SUCCESS:
      return { ...state, customer: action.payload };
    default:
      return state;
  }
};

export const getCustomerState = createFeatureSelector<State>('customer');
export const getCustomerEntities = createSelector(getCustomerState, state => state.customers);
export const getCustomerEntity = createSelector(getCustomerState, state => state.customer);
