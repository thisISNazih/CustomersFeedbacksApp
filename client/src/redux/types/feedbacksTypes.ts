import { Feedback } from "../interfaces/feedbacks"

export const GET_FEEDBACKS= 'GET_FEEDBACKS';
export const ADD_FEEDBACK= 'ADD_FEEDBACK';
export interface GetFeedbacksStateType {
  feedbacksList: Feedback[], 
  selectedCustomerId: number|null

}

interface GetFeedbacksActionType {
  type: typeof GET_FEEDBACKS ;
  payload: {feedbacks: Feedback[], customerId:number};
} 
interface AddFeedbackActionType {
  type: typeof ADD_FEEDBACK ;
  payload: Feedback;
}
export type FeedbacksActionTypes = GetFeedbacksActionType;
export type FeedbackActionTypes = AddFeedbackActionType;