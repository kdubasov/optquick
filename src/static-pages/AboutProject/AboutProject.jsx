import React from 'react';
import {Container} from "react-bootstrap";
import BenefitsCards from "./components/BenefitsCards/BenefitsCards";
import CreatorsBlock from "./components/CreatorsBlock/CreatorsBlock";

//css
import "./AboutProject.css";
import "./AboutProjectMedia.css";

const AboutProject = () => {
    return (
        <Container className={"AboutProject"}>
            <img //title="About Project"
                src="/images/static/title-about.svg"
                alt="about project"
                className="title"
            />

            <h5>Общество, объединяющее продавцов и покупателей</h5>
            <h6>
                Добро пожаловать на оптово-розничную интернет-площадку optquick!
                Мы предоставляем огромный выбор оптовых и розничных
                поставщиков с конкурирующими ценами.
                <br/><br/>
                Компания активно развивается с начала февраля 2023 года,
                расширяя список товарных направлений и поставщиков.
                <br/><br/>
                Наша цель – упростить поиск оптовой и розничной продукции.
                Безопасность сделки для нас самое важное качество в купле-продаже.
                Для этого предусмотрена система рейтинга. благодаря которой
                покупатель сможет выбирать для себя ответственного и надежного поставщика.
                <br/><br/>
                Система публичного размещения контактной информации о продавце поможет
                потребителю сэкономить время при поиске контактов для коммуникации.
            </h6>

            {/*Блок с плюсами проекта*/}
            <BenefitsCards />
            {/*Блок с создателями проекта*/}
            <CreatorsBlock />
        </Container>
    );
};

export default AboutProject;
