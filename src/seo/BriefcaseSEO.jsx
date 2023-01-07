import React from 'react';
import {Helmet} from "react-helmet";

const BriefcaseSEO = () => {
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
            <title>Избранные товары | OptQuick</title>
            <meta
                name="description"
                content={"Добавляйте интересные вам товары в избранное и переходите к ним всего за один клик."}
            />
            <meta
                name="keywords"
                content={`optquick, товары оптом, оптов товар, избранные товары, оптовик, оптовик каталог, корзина`}
            />
        </Helmet>
    );
};

export default BriefcaseSEO;