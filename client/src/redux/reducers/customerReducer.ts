import {
    GET_CUSTOMERS, 
    ADD_CUSTOMER,
    GetCustomersStateType, 
    CustomersActionTypes, 
    CustomerActionType
  } from '../types/customerTypes';
  
  const initialStateGetCustomers: GetCustomersStateType = {
    customersList: []
  };
  
  export const getCustomersReducer = (
    state = initialStateGetCustomers,
    action: CustomersActionTypes|CustomerActionType
  ): GetCustomersStateType => {
    switch (action.type) {
      case GET_CUSTOMERS:
        return {
          ...state,
          customersList: action.payload
        };
      case ADD_CUSTOMER: 
       return {
         ...state, 
         customersList: [...state.customersList, action.payload]
       }
      default:
        return state;
    }
  }; 

