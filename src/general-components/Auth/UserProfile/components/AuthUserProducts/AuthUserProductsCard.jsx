import React from 'react';
import CardProductSwiper from "../../../../../pages-components/AdminPage/Products/CardProduct/CardProductSwiper";
import {Badge, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const AuthUserProductsCard = ({product}) => {
    return (
        <div className={"AuthUserProductsCard w-25 m-1 p-2 border"}>

            {/*swiper with images for product*/}
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

            {//Доставка
                product.deliveryPeriod &&
                <Badge>
                    Доставка: {product.deliveryPeriod}дн.
                </Badge>
            }

            {/*ссылка на страницу товара*/}
            <Link to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}>
                <Button size={"sm"} variant={"outline-dark"} className={"w-100 mt-2"}>
                    Перейти на страницу товара
                </Button>
            </Link>

            {/*ссылка на редоктирование товара*/}
            <Link to={`/userProfile/redactProduct/${product.id}`}>
                <Button size={"sm"} variant={"outline-primary"} className={"w-100 mt-2"}>
                    Редактирова товар
                </Button>
            </Link>
        </div>
    );
};

export default AuthUserProductsCard;
