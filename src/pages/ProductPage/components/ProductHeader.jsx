import React from 'react';
import CardProductSwiper from "../../../pages-components/AdminPage/Products/CardProduct/CardProductSwiper";
import {Badge, ListGroup, ListGroupItem} from "react-bootstrap";
import ProductUserData from "./ProductUserData";

const ProductHeader = ({productData}) => {
    return (
        <header className={"ProductHeader my-2 d-flex justify-content-between"}>
            <div className="w-25">
                <CardProductSwiper product={productData} />
            </div>

            <div style={{width:"calc(75% - 1em)"}} className={"text border p-2"}>
                <h4><Badge>{productData.title}</Badge></h4>

                <ListGroup className={"small"}>
                    <ListGroupItem>
                        Цена:
                        <strong>{productData.price} ₽/шт.</strong>
                    </ListGroupItem>

                    <ListGroupItem>
                        Количество:
                        <strong>{productData.amount}шт.</strong>

                        <Badge className={"mx-2"}>
                            Мин заказ: {productData.minOrder + 'шт.'}
                        </Badge>
                    </ListGroupItem>

                    {
                        productData.deliveryPeriod &&
                        <ListGroupItem>
                            Время доставки:
                            <strong>{productData.deliveryPeriod}дн.</strong>
                        </ListGroupItem>
                    }

                    <ListGroupItem>
                        Дата публикации:
                        <strong>{productData.date}</strong>
                        {
                            productData.dateRedact &&
                            <Badge>Дата последнего редактирования товара: <i>{productData.dateRedact}</i></Badge>
                        }
                    </ListGroupItem>
                </ListGroup>

                <ProductUserData productData={productData} />
            </div>
        </header>
    );
};

export default ProductHeader;
