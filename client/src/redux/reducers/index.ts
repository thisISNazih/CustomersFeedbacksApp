import { combineReducers } from 'redux';
import { getCustomersReducer } from './customerReducer'; 
import { getFeedbacksReducer } from "./feedbacksReducer";

const rootReducer = combineReducers({
  customersList: getCustomersReducer, 
  feedbacksList: getFeedbacksReducer
});

export default rootReducer;