import React from 'react';
import {useGetProductObj} from "../../pages-functions/AdminPage/GetProducts/useGetProductObj";
import CardProductSwiper from "../../pages-components/AdminPage/Products/CardProduct/CardProductSwiper";
import {Badge, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";

const ProductPage = () => {

    const path = (window.location.pathname).split('/');
    // console.log(path);

    //data for product
    const linkDBData = `/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products/${path[path.length - 1]}`;
    const productData = useGetProductObj(linkDBData);
    console.log(productData);


    return (
        <div className={'ProductPage container'}>

            {
                Object.values(productData).length ?
                    <>
                        <header className={"my-4 d-flex justify-content-between"}>
                            <div className="w-25">
                                <CardProductSwiper product={productData} />
                            </div>

                            <div style={{width:"calc(75% - 1em)"}} className={"text border p-2"}>
                                <h4><Badge>{productData.title}</Badge></h4>

                                <ListGroup>
                                    <ListGroupItem>
                                        Цена:
                                        <strong>{productData.price} ₽/шт.</strong>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        Количество:
                                        <strong>{productData.amount}шт.</strong>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        Время доставки:
                                        <strong>{productData.deliveryPeriod}дн.</strong>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        Дата публикации:
                                        <strong>{productData.date}</strong>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </header>
                    </>:
                    <Spinner animation={"border"} variant={"primary"} className={'my-4'} />
            }

        </div>
    );
};

export default ProductPage;
