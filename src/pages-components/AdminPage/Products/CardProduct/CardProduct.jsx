import React from 'react';
import {Badge, Button} from "react-bootstrap";
import CardProductSwiper from "./CardProductSwiper";

const CardProduct = ({product}) => {

    return (
        <div className={"CardProduct w-25 m-1 p-2 border"}>

            <CardProductSwiper product={product} />

            {/*Название*/}
            <Badge bg={"secondary"}>{product.title}</Badge>
            {/*Цена*/}
            <small>{product.price + '₽/шт'}</small><br />
            {/*Мин заказ*/}
            <small style={{fontSize:12,textDecoration:"underline"}}>
                Минимальный заказ от {product.minOrder} шт.
            </small>
            {/*Доставка*/}
            <Badge>
                Доставка: {product.deliveryPeriod}дн.
            </Badge>
            {/*ссылка на страницу товара*/}
            <Button size={"sm"} variant={"outline-dark"} className={"mt-2 w-100"}>
                Перейти к товару
            </Button>
        </div>
    );
};

export default CardProduct;
