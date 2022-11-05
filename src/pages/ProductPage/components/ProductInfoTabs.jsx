import React from 'react';
import {Alert, Badge, ListGroup, ListGroupItem, Tab, Tabs} from "react-bootstrap";

const ProductInfoTabs = ({productData}) => {

    console.log(productData,'ProductInfoTabs');

    const getListGroup = (title,value) => {
        if (!productData[value].length || !productData[value][0]){
            return false;
        }else {
            return (
                <>
                    <Badge className={"mb-1"}>{title}:</Badge>
                    <ListGroup className={"small"} horizontal>
                        {productData[value].map(elem => (
                            <ListGroupItem key={elem}>{elem}</ListGroupItem>
                        ))}
                    </ListGroup>
                    <br />
                </>
            )
        }
    }

    return (
        <Tabs
            defaultActiveKey="description"
            className="mb-3"
            fill
        >
            <Tab eventKey="description" title="Описание">
                <Alert className={"my-1 p-2 small"}>
                    {productData.description}
                </Alert>
            </Tab>

            <Tab eventKey="characteristics" title="Характеристики">

                {getListGroup("Размеры","sizes")}
                {getListGroup("Цвета","colors")}

                <Alert className={"my-1 p-2 small"}>
                    <small>Характеристики:</small> <br />
                    <i><b>{productData.characteristics}</b></i>
                </Alert>
            </Tab>

            <Tab eventKey="delivery" title="Доставка">
                <Badge>
                    Срок доставки:
                    {
                        productData.deliveryPeriod ?
                            <i>{productData.deliveryPeriod + 'дн'}</i>:
                            'Уточните у продавца'
                    }
                </Badge>
                <br />

                <Badge>
                    Город нахождения товара:
                    {
                        productData.location ?
                            <i>{productData.location}</i>:
                            'Уточните у продавца'
                    }
                </Badge>
                <br />

                <Alert className={"my-1 p-2 small"}>
                    Способ доставки: {productData.selectDelivery} <br />
                    <small><i>О всех возможных способах отправки товара уточняйте у продавцов.</i></small>
                </Alert>

            </Tab>

            <Tab eventKey="pay" title="Оплата">
                <Alert className={"my-1 p-2 small"}>
                    Способ оплаты: {productData.selectPay} <br />
                    <small><i>О всех возможных способах оплаты товара уточняйте у продавцов.</i></small>
                </Alert>
            </Tab>
        </Tabs>
    );
};

export default ProductInfoTabs;
