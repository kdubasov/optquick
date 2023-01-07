import React from 'react';
import {Helmet} from "react-helmet";

const ProductSEO = ({data}) => {
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
            <title>{data.title} | OptQuick</title>
            <meta
                name="description"
                content={data.description}
            />
            <meta
                name="keywords"
                content={`optquick, товары оптом, оптов товар, ${data.title}, оптовик, оптовик каталог`}
            />
        </Helmet>
    );
};

export default ProductSEO;