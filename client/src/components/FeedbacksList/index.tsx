import {useSelector, useDispatch} from "react-redux";  
import {useState, useCallback, useEffect} from "react";
import { AppState } from '../../redux/store/store';   
import {addFeedback} from "../../redux/effects/feedbacksEffects";
import {Feedback} from "../../redux/interfaces/feedbacks"

import styled from "styled-components"; 
const FeedbackItem = styled.div`
padding: 0.3rem;
`;  
const EmptyResults = styled.p` 
color:red;
`
const FeedbackText = styled.p` 
text-align: initial;
`
const FeedbacksItemsList = styled.div`
display:flex; 
flex-direction:column;  
width: 50%;
`; 
const ActionButton = styled.button`
    max-width:120px; 
    border:none;
`
export default function FeedbacksList() {  
    const dispatch = useDispatch()
    const [newInput, setNewInput] = useState(false); 
    const [newFeedbackVal, setNewFeedbackVal] = useState("");
    const feedbacksList = useSelector((state: AppState) => state.feedbacksList.feedbacksList); 
    const selectedCustomerId = useSelector((state: AppState) => state.feedbacksList.selectedCustomerId); 
    
    const feedbacksListItems = feedbacksList.length > 0 ? feedbacksList.map((feedback: Feedback) => (
        <FeedbackItem>
            <FeedbackText>{feedback.content}</FeedbackText>
        </FeedbackItem>
    )) : <EmptyResults>No feedbacks available</EmptyResults>

    

    const handleNewFeedback = () => {
        setNewInput(true)
    } 
    const handleInputChange =(e:any) => {
        setNewFeedbackVal(e.target.value)
    }  
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setNewInput(false);
        }
    }, []);
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') { 
            addFeedback(newFeedbackVal,selectedCustomerId,dispatch)
            setNewInput(false);
        }
    } 
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [])
  return (
      <FeedbacksItemsList> 
          <h3>Feedbacks</h3> 
          <ActionButton>
            {selectedCustomerId&&<button onClick={() => handleNewFeedback()}>Add Feedback</button>}
        </ActionButton> 
        {newInput && <input type="text" value={newFeedbackVal} placeholder="New Feedback" onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleInputChange(e)} />}
         {feedbacksListItems}
      </FeedbacksItemsList>
  ) ;
};
