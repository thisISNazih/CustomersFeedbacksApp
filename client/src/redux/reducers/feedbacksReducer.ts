import {
    GET_FEEDBACKS,
    GetFeedbacksStateType,
    FeedbacksActionTypes, 
    FeedbackActionTypes,

    ADD_FEEDBACK
  } from '../types/feedbacksTypes';
  
  const initialStateGetFeedbacks: GetFeedbacksStateType = {
    feedbacksList: [], 
    selectedCustomerId: null
  };
  
  export const getFeedbacksReducer = (
    state = initialStateGetFeedbacks,
    action: FeedbacksActionTypes|FeedbackActionTypes
  ): GetFeedbacksStateType => {
    switch (action.type) {
      case GET_FEEDBACKS: 
       const {feedbacks, customerId} = action.payload;
        return {
          ...state,
          feedbacksList: feedbacks, 
          selectedCustomerId: customerId
        }; 
        case ADD_FEEDBACK: 
        return {
          ...state,
          feedbacksList: [...state.feedbacksList, action.payload] 
        };
      default:
        return state;
    }
  }; 
