import React from 'react';
import "./CryptoAdv.css";

const CryptoAdv = () => {
    return (
        <div className={"CryptoAdv"}>
            <div className="content">

                <h4>
                    Следите за изменением криптовалют вместе с cryptoQuick!
                </h4>
                <p className={"small"}>
                    Отслеживайте основную информацию о криптовалютном рынке,
                    биржах, деривативах и многом другом на сайте
                    <a
                        href={"https://cryptoquick.ru/"}
                        rel={"noreferrer"}
                        target={"_blank"}
                    >cryptoQuick.ru</a>.
                </p>

                <footer>
                    <a//зеленая кнопка с ссылкой
                        className={"but-green px-5"}
                        href={"https://cryptoquick.ru/"}
                        rel={"noreferrer"}
                        target={"_blank"}
                    >
                        Перейти к источнику
                    </a>

                    <p className="small adv">
                        *Рекламная запись от ©{new Date().getFullYear()} cryptoQuick.ru
                        <br />
                        *Все права защищены.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default CryptoAdv;
