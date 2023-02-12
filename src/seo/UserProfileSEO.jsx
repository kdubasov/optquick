import React from 'react';
import {Helmet} from "react-helmet";

const AuthProfileSEO = ({data}) => {

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Language" content="ru" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="Author" content="Дубасов Кирилл Сергеевич" />
            <meta name="Author" content="Воробушков Михаил Евгеньевич" />
            <meta name="Copyright" content="Дубасов Кирилл Сергеевич" />
            <meta name="Copyright" content="Воробушков Михаил Евгеньевич" />
            <meta name="robots" content="all"/>
            <title>Продавец {data?.surname + " " + data?.name} | OptQuick</title>
            <meta
                name="description"
                content={"На странице продавца вы можете уидеть основуню информацию о нем, " +
                    "а также товары, отзывы и контакты. Вы можете оставить свой отзыв о продавце или отправить на него жалобу."}
            />
            <meta
                name="keywords"
                content={`optquick, товары оптом, оптов товар, вход, личный кабинет, продавец, оптовик каталог, профиль`}
            />
        </Helmet>
    );
};

export default AuthProfileSEO;