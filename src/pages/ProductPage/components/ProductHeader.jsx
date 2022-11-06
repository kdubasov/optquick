import React from 'react';
import CardProductSwiper from "../../../pages-components/AdminPage/Products/CardProduct/CardProductSwiper";
import {Alert, Badge, ListGroup, ListGroupItem} from "react-bootstrap";
import ProductUserData from "./ProductUserData";
import BriefcaseButton from "../../../general-components/BriefcaseButton/BriefcaseButton";
import {useUserAuth} from "../../../context/AuthContext";


const ProductHeader = ({productData,setAlertData}) => {

    const { user } = useUserAuth();

    return (
        <header className={"ProductHeader my-2 d-flex justify-content-between"}>
            <div className="w-25">
                <CardProductSwiper product={productData} />
            </div>

            <div style={{width:"calc(75% - 1em)"}} className={"text border p-2"}>
                <h4><Badge>{productData.title}</Badge></h4>

                {!user &&
                    <Alert className={"p-2 small"}>
                        Для того чтобы добавить товар в избранное вы должны авторизоваться.
                    </Alert>
                }

                <BriefcaseButton elemData={productData} setAlertData={setAlertData} />

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
                        <br />
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
