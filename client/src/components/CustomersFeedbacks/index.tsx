import CustomersList from "../CustomersList";
import FeedbacksList from "../FeedbacksList";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
max-width: 1170px;
margin: auto;
`;


const AppWrapper = styled.div`
 display:flex;
 border: 2px solid #000; 
 padding:1rem 
`;  


const CustomerFeedbacks = () => { 
      return(  <Container> 
            <h3>Customer Feedbacks</h3> 
            <AppWrapper> 
                <CustomersList />
                <FeedbacksList />
            </AppWrapper>
        </Container> 
      )
    
};

export default CustomerFeedbacks;
