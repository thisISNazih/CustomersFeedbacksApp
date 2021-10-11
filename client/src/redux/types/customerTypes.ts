import { Customer } from "../interfaces/cutsomers"

export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export interface GetCustomersStateType {
  customersList: Customer[];
}

interface GetCustomersActionType {
  type: typeof GET_CUSTOMERS;
  payload: Customer[];
} 

interface AddCustomerActionType {
  type: typeof ADD_CUSTOMER;
  payload: Customer;
}
export type CustomersActionTypes = GetCustomersActionType; 
export type CustomerActionType = AddCustomerActionType;