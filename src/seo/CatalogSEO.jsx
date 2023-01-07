import React from 'react';
import {Helmet} from "react-helmet";

const CatalogSEO = () => {
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
            <title>Категории товаров | OptQuick</title>
            <meta
                name="description"
                content={
                    "В каталоге товаров вы можете увидеть все категории товаров. " +
                    "Найдите товар для себя или дальнейшей перепродажи. " +
                    "На OptQuick вы всегда найдете товар, который нужен вам."
                }
            />
            <meta
                name="keywords"
                content={"optquick, товары оптом, оптов товар, каталоги товаров оптом цены, оптовик, оптовик каталог"}
            />
        </Helmet>
    );
};

export default CatalogSEO;
