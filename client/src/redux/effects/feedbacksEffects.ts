import { getFeedbacksActions } from '../actions/feedbacksActions';
import { Dispatch } from 'redux';
import { FeedbacksActionTypes } from '../types/feedbacksTypes'; 

export const getFeedbacks = (id:any) => {
  return function (dispatch: Dispatch<FeedbacksActionTypes>) {
    fetch(`http://localhost:3002/api/v1/customerfeedbacks/${id}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(res => res.json())
      .then(data => { 
        dispatch(getFeedbacksActions(data.data.feedbacks));
        return data;
      });
  };
};
