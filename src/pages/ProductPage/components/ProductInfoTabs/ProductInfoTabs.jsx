import React, {useState} from 'react';
import {Alert} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";

//css
import "./ProductInfoTabs.css";
import "./ProductInfoTabsMedia.css";

const ProductInfoTabs = ({productData}) => {

    const [selectValue,setSelectValue] = useState(1);

    //media query
    const media350px = useMediaQuery({query: '(max-width: 350px)'});

    //get button for header
    const getButton = (text,value) => {
        return (
            <button
                onClick={() => setSelectValue(value)}
                disabled={selectValue === value}
            >
                {text}
            </button>
        )
    }

    return (
        <div className={"ProductInfoTabs"}>
            <header>
                {getButton("Описание",1)}
                {getButton("Характеристики",2)}
                {getButton("Доставка и оплата",3)}
            </header>

            {
                media350px ?
                    <hr className={"mobile-hr"}/>:
                    <Alert variant={"success"} className={"small my-3"}>
                        При покупке товара мы рекомендуем уточнять информацию о нем у продавца.
                    </Alert>
            }

            <div className="container-data">
                {
                    selectValue === 1 &&
                    <div className={"inner"}>
                        <p className={"blue"}>
                            <span>Описание:</span><br/>
                            {productData.description}
                        </p>
                        <p>
                            <span>Дата публикации товара:</span><br/>
                            {productData.date}.
                        </p>
                    </div>
                }
                {
                    selectValue === 2 &&
                    <div className={"inner"}>
                        <p className={"blue"}>
                            <span>Характеристики:</span><br/>
                            {productData.characteristics || "Характеристики отсутствуют для данного товара."}
                        </p>
                        <p className={"blue"}>
                            <span>Всего товара в наличии:</span><br/>
                            {productData.amount + " штук."}
                        </p>
                        <p>
                            <span>Минимальный заказ:</span><br/>
                            {productData.minOrder + " штук."}
                        </p>
                        {
                            productData.sizes[0] &&
                            <p>
                                <span>Размеры:</span><br/>
                                {productData.sizes.map(elem => " " + elem)}.
                            </p>
                        }
                        {
                            productData.colors[0] &&
                            <p>
                                <span>Цвета:</span><br/>
                                {productData.colors.map(elem => " " + elem)}.
                            </p>
                        }
                    </div>
                }
                {
                    selectValue === 3 &&
                    <div className={"inner"}>
                        <p>
                            <span>Нахождение товара:</span><br/>
                            {productData.location || "Не указано"}.
                        </p>
                        <p>
                            <span>Время доставки:</span><br/>
                            {productData.deliveryPeriod ? productData.deliveryPeriod + " дней" : "Не указано"}.
                        </p>
                        <p>
                            <span>Варианты доставки:</span><br/>
                            {productData.selectDelivery || "Не указано"}.
                        </p>
                        <p>
                            <span>Варианты оплаты:</span><br/>
                            {productData.selectPay || "Не указано"}.
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductInfoTabs;
