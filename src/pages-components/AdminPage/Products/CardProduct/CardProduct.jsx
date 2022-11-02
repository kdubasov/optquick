import React from 'react';
import {Badge, Button} from "react-bootstrap";
import CardProductSwiper from "./CardProductSwiper";
import {Link} from "react-router-dom";

const CardProduct = ({product}) => {

    return (
        <div className={"CardProduct w-25 m-1 p-2 border"}>

            <CardProductSwiper product={product} />

            {/*Название*/}
            <Badge bg={"secondary"}>{product.title}</Badge>
            <br />
            {/*Цена*/}
            <small>{product.price + '₽/шт'}</small>
            <br />
            {/*Мин заказ*/}
            <small style={{fontSize:12,textDecoration:"underline"}}>
                Минимальный заказ от {product.minOrder} шт.
            </small>
            <br />
            {/*Доставка*/}
            <Badge>
                Доставка: {product.deliveryPeriod}дн.
            </Badge>
            {/*ссылка на страницу товара*/}
            <Link to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}>
                <Button size={"sm"} variant={"outline-dark"} className={"mt-2 w-100"}>
                    Перейти к товару
                </Button>
            </Link>
        </div>
    );
};

export default CardProduct;
