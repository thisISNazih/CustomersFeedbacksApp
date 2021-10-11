import {
    GET_FEEDBACKS,
    GetFeedbacksStateType,
    FeedbacksActionTypes
  } from '../types/feedbacksTypes';
  
  const initialStateGetFeedbacks: GetFeedbacksStateType = {
    feedbacksList: []
  };
  
  export const getFeedbacksReducer = (
    state = initialStateGetFeedbacks,
    action: FeedbacksActionTypes
  ): GetFeedbacksStateType => {
    switch (action.type) {
      case GET_FEEDBACKS:
        return {
          ...state,
          feedbacksList: action.payload
        };
      default:
        return state;
    }
  };