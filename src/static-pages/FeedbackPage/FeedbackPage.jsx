import React from 'react';
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm";
import {Container} from "react-bootstrap";
import "./FeedbackPage.css";
import {Link} from "react-router-dom";

const FeedbackPage = () => {
    return (
        <Container className={"FeedbackPage"}>
            <h3 className={"title"}>Мы всегда рады ответить на ваши вопросы</h3>
            <p className="small warning">
                Если вы не нашли, нужный вам ответ на странице
                "<Link to={"/answers"}>Вопросы и ответы</Link>", то
                вы можете записать ваш вопрос в данную форму
                и наши сотрудники свяжется с вами в ближайшее время.
                Спасибо, что помогаете улучшать наш сервис!
            </p>
            <FeedbackForm />
        </Container>
    );
};

export default FeedbackPage;
