import React from 'react';
import {Helmet} from "react-helmet";

const MainPageSEO = () => {
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
            <title>OptQuick - площадка для продажи и покупки товаров оптом</title>
            <meta
                name="description"
                content={
                    "На OptQuick вы можете покупать и продавать товары оптом с выгодой для вас. " +
                    "Живое общение с покупателями и продавцами. " +
                    "Беслатные публикации объявлений в любом количестве. " +
                    "Простая и быстрая регистрация пользователей. " +
                    "На OptQuick вы всегда найдете товар, который нужен вам."
                }
            />
            <meta
                name="keywords"
                content={"optquick, товары оптом, оптов товар, каталоги товаров оптом цены, оптовик, сайт оптовиков, оптовик каталог"}
            />
        </Helmet>
    );
};

export default MainPageSEO;
