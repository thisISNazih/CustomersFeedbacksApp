import { GET_FEEDBACKS,ADD_FEEDBACK, SEARCH_FEEDBACKS,FeedbacksActionTypes, FeedbackActionTypes} from '../types/feedbacksTypes';
import {Feedback} from "../interfaces/feedbacks";

export const getFeedbacksActions = (feedbackData:{feedbacks:Feedback[], customerId:number}): FeedbacksActionTypes => {
  return {
    type: GET_FEEDBACKS,
    payload: feedbackData
  };
}; 

export const addFeedbackActions = (feedback: Feedback): FeedbackActionTypes => {
  return {
    type: ADD_FEEDBACK,
    payload: feedback
  };
}; 

export const searchFeedbacksAction = (keyword: string) => {
  return {
    type: SEARCH_FEEDBACKS,
    payload: keyword
  }
}