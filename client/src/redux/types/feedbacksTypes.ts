import { Feedback } from "../interfaces/feedbacks"

export const GET_FEEDBACKS= 'GET_FEEDBACKS';

export interface GetFeedbacksStateType {
  feedbacksList: Feedback[];
}

interface GetFeedbacksActionType {
  type: typeof GET_FEEDBACKS ;
  payload: Feedback[];
}
export type FeedbacksActionTypes = GetFeedbacksActionType;