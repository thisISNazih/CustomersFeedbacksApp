import {useSelector} from "react-redux"; 
import { AppState } from '../../redux/store/store';  
import {Feedback} from "../../redux/interfaces/feedbacks"

import styled from "styled-components"; 
const FeedbackItem = styled.div`
padding: 0.3rem;
`; 
const FeedbackText = styled.p` 
text-align: initial;
`
const FeedbacksItemsList = styled.div`
display:flex; 
flex-direction:column;  
width: 50%;
`;
export default function FeedbacksList() {
    const feedbacksList = useSelector((state: AppState) => state.feedbacksList.feedbacksList); 
    const feedbacksListItems = feedbacksList.map((feedback: Feedback) => (
        
        <FeedbackItem>
            
            <FeedbackText>{feedback.content}</FeedbackText>
        </FeedbackItem>
    ));
  return (
      <FeedbacksItemsList> 
          <h3>Feedbacks</h3>
         {feedbacksListItems}
      </FeedbacksItemsList>
  ) ;
};
