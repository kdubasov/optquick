import React from 'react';
import "./ThreeInfoBlock.css";

const ThreeInfoBlock = () => {
    return (
        <div className={"ThreeInfoBlock"}>
            <div className="inner big">
                <img src="/images/static/thr-def-1.svg" alt="payload"/>
                <h1>Удобные способы оплаты</h1>
                <h6>
                    Вы сами выбираете как оплатить вашу покупку или как принять оплату при продаже.
                    На странице товара указан наиболее желательный способ оплаты товара, но вы можете обсудить
                    все возможные способы оплаты с продавцом.
                </h6>
            </div>

            <div className="inner default first">
                <img src="/images/static/thr-big.svg" alt=""/>
                <h3>Электротовары</h3>
                <h6 className="half">
                    Вы можете найти гаджет для любого устройства или даже само устройство!
                    В разделе "Электротовары" вас ждет много полезных товаров.
                </h6>
            </div>

            <div className="inner default second">
                <img src="/images/static/thr-def-2.svg" alt=""/>
                <h3>Игры для детей</h3>
                <h6 className="half">
                    Найдите лучшие игрушки для вашего ребенка или на перепродажу,
                    мы уверены, вы найдете то, что вам по вкусу!
                </h6>
            </div>
        </div>
    );
};

export default ThreeInfoBlock;
