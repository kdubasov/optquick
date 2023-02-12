import React from 'react';
import {Helmet} from "react-helmet";

const LoginSEO = () => {
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
            <title>Авторизация | OptQuick</title>
            <meta
                name="description"
                content={
                    "После прохождения авторизации вы можете начать продавать свои товары, " +
                    "а также получите доступ к контактам других продавцов." +
                    "Optquick заботится о своих клиентах, поэтому мы максимально упростили " +
                    "процесс авторизации."
                }
            />
            <meta
                name="keywords"
                content={"optquick, авторизация оптовик, оптов товар, авторизация optquick, оптовик, сайт оптовиков, оптовик каталог"}
            />
        </Helmet>
    );
};

export default LoginSEO;