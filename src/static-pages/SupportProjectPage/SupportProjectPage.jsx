import React from 'react';
import PayCards from "./components/PayCards/PayCards";
import {Container} from "react-bootstrap";

//css
import "./SupportProjectPage.css";
import "./SupportProjectPageMedia.css";

const SupportProjectPage = () => {
    return (
        <Container className={"SupportProjectPage"}>
            <h3 className={"title"}>Поддержать проект</h3>
            <h6>
                Наша команда очень старается поддерживать площадку
                в актуальном состоянии, на это уходит очень много
                сил и времени. Будем очень рады, если вы поддержите
                нас финансово – это делает работу увереннее и
                позволяет надёжно строить планы развития проекта «Optquick».
            </h6>

            <PayCards />

            <footer>
                <h5>Выражаем огромную благодарность пользователям, поддержавшим проект!</h5>
            </footer>
        </Container>
    );
};

export default SupportProjectPage;
