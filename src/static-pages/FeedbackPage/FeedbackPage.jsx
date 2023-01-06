import React from 'react';
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm";
import {Container} from "react-bootstrap";

const FeedbackPage = () => {
    return (
        <Container className={"FeedbackPage"}>
            <FeedbackForm />
        </Container>
    );
};

export default FeedbackPage;
