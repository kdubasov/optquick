import React from 'react';
import {Helmet} from "react-helmet";

const PostProductSEO = () => {
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
            <title>Разместить объявление | OptQuick</title>
            <meta
                name="description"
                content={
                    "На OptQuick вы можете покупать и продавать товары оптом с выгодой для вас. " +
                    "Просто заполните форму и ваш товар будет размещен на нашей площадке. " +
                    "Вам необходимо указать основные сведения о товаре и прочесть условия площадки." +
                    "Вы должны заполнить основную информацию о себе в профиле, для возможности выкладывать товар на площадку."
                }
            />
            <meta
                name="keywords"
                content={"optquick, товары оптом, продать товар, каталоги товаров оптом цены, оптовик, сайт оптовиков, разместить объявление"}
            />
        </Helmet>
    );
};

export default PostProductSEO;