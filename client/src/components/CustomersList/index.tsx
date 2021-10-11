import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers, addCustomer } from "../../redux/effects/customersEffects";
import { getFeedbacks } from "../../redux/effects/feedbacksEffects";
import { Customer } from "../../redux/interfaces/cutsomers";
import { AppState } from '../../redux/store/store';

import styled from "styled-components";
const CustomerItem = styled.div`
padding: 0.5rem;
border-bottom: 1px solid #000; 
`;
const CustomerName = styled.p` 
text-align: initial;
`
const CustomerItemsList = styled.div`
display:flex; 
flex-direction:column;  
width: 50%; 
margin-right: 2rem; 
border-right: 2px solid #000;
`;
const ActionButton = styled.button`
    max-width:120px; 
    border:none;
`
export default function CustomersList() {
    const dispatch = useDispatch();
    const [newInput, setNewInput] = useState(false);
    const [newCustomerVal, setNewCustomerVal] = useState("");
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addCustomer(newCustomerVal, dispatch);
            setNewInput(false);
        } 
    }

    const handleClickCustomerName = (customerId: any) => {
        getFeedbacks(customerId,dispatch);
    }

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setNewInput(false);
        }
    }, []);
    const handleAddNewCustomer = () => {
        setNewInput(true)
    }
    const handleInputChange = (e: any) => {
        setNewCustomerVal(e.target.value)
    }
    useEffect(() => {
        getCustomers(dispatch);
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [dispatch]);
    const customersList = useSelector((state: AppState) => state.customersList.customersList);
    const customersListItems = customersList.map((customer: Customer) => (
        <CustomerItem>
            <div onClick={() => handleClickCustomerName(customer.id)} key={customer.id}>
                <CustomerName>{customer.name}</CustomerName>
            </div>
        </CustomerItem>
    ));
    return <CustomerItemsList>
        <h3>Customers</h3>
        <ActionButton>
            <button onClick={() => handleAddNewCustomer()}>Add Customer</button>
        </ActionButton>
        {newInput && <input type="text" value={newCustomerVal} placeholder="New Customer" onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleInputChange(e)} />}
        {customersListItems}
    </CustomerItemsList>;
}