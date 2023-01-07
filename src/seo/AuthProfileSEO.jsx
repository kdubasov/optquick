import React from 'react';
import {Helmet} from "react-helmet";

const AuthProfileSEO = () => {
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
            <title>Личный кабинет | OptQuick</title>
            <meta
                name="description"
                content={"В личном кабинете вы можете отслеживать ваши товары, а также данные вашего профиля," +
                    " редактировать товары и данные профиля, а также просматривать отзывы о вас."}
            />
            <meta
                name="keywords"
                content={`optquick, товары оптом, оптов товар, вход, личный кабинет, оптовик, оптовик каталог, профиль`}
            />
        </Helmet>
    );
};

export default AuthProfileSEO;