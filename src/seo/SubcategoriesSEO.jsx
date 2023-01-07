import React from 'react';
import {Helmet} from "react-helmet";

const SubcategoriesSEO = ({titleSub}) => {

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
            <title>Каталог подкатегорий и товаров "{titleSub}" | OptQuick</title>
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
                content={`optquick, ${titleSub}} оптом, оптов товар, каталоги товаров оптом цены, оптовик, оптовик ${titleSub}`}
            />
        </Helmet>
    );
};

export default SubcategoriesSEO;
