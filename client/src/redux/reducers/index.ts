import { combineReducers } from 'redux';
import { getCustomersReducer } from './customerReducer'; 

const rootReducer = combineReducers({
  customersList: getCustomersReducer
});

export default rootReducer;