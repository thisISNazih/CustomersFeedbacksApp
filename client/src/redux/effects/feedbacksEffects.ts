import { getFeedbacksActions, addFeedbackActions, searchFeedbacksAction } from '../actions/feedbacksActions';
import { Dispatch } from 'redux';
import { FeedbacksActionTypes, FeedbackActionTypes } from '../types/feedbacksTypes';

export const getFeedbacks = (id: any, dispatch: Dispatch<FeedbacksActionTypes>) => {
  fetch(`http://localhost:3002/api/v1/customerfeedbacks/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch(getFeedbacksActions({feedbacks: data.data.feedbacks, customerId:id}));
      return data;
    });

};

export const addFeedback = (feedback: string,customerId: number|null, dispatch: Dispatch<FeedbackActionTypes>) => { 
  const configs = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      "content": feedback, 
      "customer_id": customerId
    })
  }
   fetch('http://localhost:3002/api/v1/customerfeedbacks',configs).then(res => 
  res.json()
  ).then(data => { 
      dispatch(addFeedbackActions(data[0]))
    }); 

}; 

export const searchFeedback = (keyword:string, dispatch:Dispatch) => {
   dispatch(searchFeedbacksAction(keyword))
}