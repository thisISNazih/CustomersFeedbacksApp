import { getCustomerActions, addCustomerActions } from '../actions/customersActions';
import { Dispatch } from 'redux'; 
import { CustomersActionTypes, CustomerActionType } from '../types/customerTypes';


export const getCustomers = (dispatch: Dispatch<CustomersActionTypes>) => {
    fetch('http://localhost:3002/api/v1/customers', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        dispatch(getCustomerActions(data.data.customers));
      });
};


export const addCustomer = (customerName: string, dispatch: Dispatch<CustomerActionType>) => { 
    console.log("here again2", customerName)
    const configs = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        "name": customerName
      })
    }
     fetch('http://localhost:3002/api/v1/customers',configs).then(res => 
    res.json()
    ).then(data => { 
      // const dispatch = Dispatch<CustomerActionType>
        dispatch(addCustomerActions(data[0]))
      }); 

};
