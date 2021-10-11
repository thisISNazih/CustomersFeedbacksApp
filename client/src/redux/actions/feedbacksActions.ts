import { GET_FEEDBACKS, FeedbacksActionTypes} from '../types/feedbacksTypes';
import {Feedback} from "../interfaces/feedbacks";

export const getFeedbacksActions = (feedbacks: Feedback[]): FeedbacksActionTypes => {
  return {
    type: GET_FEEDBACKS,
    payload: feedbacks
  };
};