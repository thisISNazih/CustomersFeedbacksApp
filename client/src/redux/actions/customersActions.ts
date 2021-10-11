import { GET_CUSTOMERS, ADD_CUSTOMER, CustomersActionTypes,CustomerActionType} from '../types/customerTypes';
import {Customer} from "../interfaces/cutsomers";

export const getCustomerActions = (customers: Customer[]): CustomersActionTypes => {
  return {
    type: GET_CUSTOMERS,
    payload: customers
  };
}; 

export const addCustomerActions = (customer: Customer): CustomerActionType => {
  return {
    type: ADD_CUSTOMER,
    payload: customer
  };
}; 