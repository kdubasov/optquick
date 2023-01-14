import React from 'react';
import "./CryptoAdv.css";

const CryptoAdv = () => {
    return (
        <div className={"CryptoAdv"}>
            <img
                src="/images/advertisement/logo.svg"
                alt="cryptoQuick"
                className="logo"
            />

            <div className="content">
                <h3>
                    Следите за изменением криптовалют вместе с
                    <b>crypto<span>Quick</span></b>
                </h3>
                <h6>
                    Отслеживайте основную информацию о криптовалютном рынке,
                    биржах, деривативах и многом другом.
                </h6>

                <a//blue кнопка с ссылкой
                    className={"but-blue"}
                    href={"https://cryptoquick.ru/"}
                    rel={"noreferrer"}
                    target={"_blank"}
                >
                    Перейти
                </a>
            </div>
        </div>
    );
};

export default CryptoAdv;
