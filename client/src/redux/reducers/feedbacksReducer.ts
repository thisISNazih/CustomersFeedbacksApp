import {
    GET_FEEDBACKS,
    SEARCH_FEEDBACKS,
    GetFeedbacksStateType,
    FeedbacksActionTypes, 
    FeedbackActionTypes,
    FeedbackSearchActionType,
    ADD_FEEDBACK
  } from '../types/feedbacksTypes';
  
  const initialStateGetFeedbacks: GetFeedbacksStateType = {
    feedbacksList: [], 
    selectedCustomerId: null
  };
  
  export const getFeedbacksReducer = (
    state = initialStateGetFeedbacks,
    action: FeedbacksActionTypes|FeedbackActionTypes|FeedbackSearchActionType
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
        case SEARCH_FEEDBACKS: 
        return {
          ...state,
          feedbacksList: state.feedbacksList.filter(item => item.content.includes(action.payload))
        };
      default:
        return state;
    }
  }; 
