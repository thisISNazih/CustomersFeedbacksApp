import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { AppState } from '../../redux/store/store';
import { addFeedback, getFeedbacks, searchFeedback } from "../../redux/effects/feedbacksEffects";
import { Feedback } from "../../redux/interfaces/feedbacks"
import TextField from "@material-ui/core/TextField"  
import Button from "@material-ui/core/Button" 
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
const ActionButton = styled.div`
    max-width:140px; 
    border:none;
    background-color:whitesmoke;
`
export default function FeedbacksList() {
    const dispatch = useDispatch()
    const [newInput, setNewInput] = useState(false); 
    const [clearSearch, setClearSearch] = useState(false);
    const [searchKey, setSearchKey] = useState("");
    const [newFeedbackVal, setNewFeedbackVal] = useState("");
    const feedbacksList = useSelector((state: AppState) => state.feedbacksList.feedbacksList);
    const selectedCustomerId = useSelector((state: AppState) => state.feedbacksList.selectedCustomerId);

    const feedbacksListItems = feedbacksList.length > 0 ? feedbacksList.map((feedback: Feedback) => (
        <FeedbackItem key={feedback.id}>
            <FeedbackText>{feedback.content}</FeedbackText>
        </FeedbackItem>
    )) : selectedCustomerId && <EmptyResults>No feedbacks available</EmptyResults>



    const handleNewFeedback = () => {
        setNewInput(true)
    }
    const handleSearchInput = (e: any) => {
        setSearchKey(e.target.value)
    }
    const handleInputChange = (e: any) => {
        setNewFeedbackVal(e.target.value) 
    }
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setNewInput(false);
        }
    }, []); 
    const handleSearchKeydown = (e:any) => {
        if (e.key === 'Enter') {
            searchFeedback(searchKey,dispatch);
            setClearSearch(true); 
            setSearchKey("");
        }
    }
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addFeedback(newFeedbackVal, selectedCustomerId, dispatch)
            setNewInput(false); 
        }
    } 
    const handleClearSearch = () => {
        getFeedbacks(selectedCustomerId, dispatch); 
        setClearSearch(false);
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
                {selectedCustomerId && <ActionButton><Button onClick={() => handleNewFeedback()}>Add Feedback</Button></ActionButton>}
            {selectedCustomerId&&<TextField
                id="outlined-name"
                label="Search"
                value={searchKey}
                onChange={handleSearchInput} 
                onKeyDown={(e) => handleSearchKeydown(e)}
            />}  
            {clearSearch && <a href="#" onClick={()=>handleClearSearch()}>clear</a>}
            {newInput && <TextField type="text" value={newFeedbackVal} placeholder="New Feedback" onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleInputChange(e)} />}
            {feedbacksListItems}
        </FeedbacksItemsList>
    );
};
