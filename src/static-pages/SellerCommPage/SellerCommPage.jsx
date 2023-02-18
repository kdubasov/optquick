import React from 'react';
import {Container} from "react-bootstrap";

//css
import "./SellerCommPage.css";
import "./SellerCommPageMedia.css";

const SellerCommPage = () => {
    return (
        <Container className={"SellerCommPage"}>
            <h3 className={"title"}>Связь с продавцом</h3>

            <h5>1. Войти/зарегистрироваться</h5>
            <h6>
                Связаться с поставщиком могут только авторизованные пользователи.
                Для этого необходимо авторизоваться/зарегистрировать аккаунт
                на платформе OptQuick.
            </h6>
            <img src="/images/static/register.png" alt="register button"/>

            <h5>2. Найти нужный товар</h5>
            <h6>
                Найдите нужный товар, перейдите в карточку товара,
                затем нажмите на кнопку “Связаться с продавцом”.
            </h6>
            <img src="/images/static/product.png" alt="product page"/>

            <h5>3. Связаться с продавцом</h5>
            <h6 className={"mb-2"}>
                Выберите наиболее подходящее средство связи и свяжитесь с продавцом.
            </h6>
            <p className="small red">
                Помните, всю ответственность в совершении последующих действий вы берете на себя!
                Мы предоставляем информацию о поставщиках/продавцах, но не гарантируем безопасность
                в совершении сделки.
            </p>
        </Container>
    );
};

export default SellerCommPage;
