import React from 'react';
import {Container} from "react-bootstrap";
import "./NotFoundPage.css";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container className={"NotFoundPage"}>
            <img src="/images/static/notFound.svg" alt="404"/>
            <div className="text">
                <h5>...бип...боп...бип Страница не найдена</h5>
                <Link to="/">Вернуться на главную страницу</Link>
            </div>
        </Container>
    );
};

export default NotFoundPage;
