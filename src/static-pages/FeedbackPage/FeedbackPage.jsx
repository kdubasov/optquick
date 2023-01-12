import React from 'react';
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm";
import {Container} from "react-bootstrap";
import "./FeedbackPage.css";
import {Link} from "react-router-dom";

const FeedbackPage = () => {

    const getContact = (value,type) => {
        return (
            <div className="inner">
                <img src={`/images/icons/${type}-outline.svg`} alt={value}/>
                <h6>{value}</h6>
            </div>
        );
    }

    return (
        <Container className={"FeedbackPage"}>
            <h3 className={"title"}>Обратная связь</h3>

            <h5 className={"title"}>Контактные данные для связи</h5>
            <div className="contacts-data">
                <div className="column">
                    {getContact("optquick-partners@mail.ru","mess")}
                    {getContact("optquick@yandex.ru","mess")}
                    {getContact("optquick-feedback@gmail.com","mess")}
                </div>
                <div className="column">
                    {getContact("+7 (904) 057-41-45","phone")}
                    {getContact("+7 (952) 448-43-31","phone")}
                </div>
            </div>

            <h5 className={"title"}>Оставить заявку</h5>
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
