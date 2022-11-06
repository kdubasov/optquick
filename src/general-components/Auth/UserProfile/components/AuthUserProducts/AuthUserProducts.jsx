import React from 'react';
import {useGetUserProducts} from "../../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import {Alert, Badge} from "react-bootstrap";
import AuthUserProductsCard from "./AuthUserProductsCard";

const AuthUserProducts = ({userId}) => {

    const userProducts = useGetUserProducts(userId);
    console.log(userProducts,'data in UserPageProducts');

    return (
        <div className={'AuthUserProducts w-100 my-2 p-1 border'}>
            <h4><Badge>Мои товары</Badge></h4>

            <div className="w-100 d-flex flex-wrap">
                {
                    userProducts.length ?
                        userProducts.map(product => (
                            <AuthUserProductsCard key={product.id} product={product} />
                        )):
                        <Alert className={"w-50 p-2 small"}>
                            Вы не добавлили ни одного товара
                        </Alert>
                }
            </div>
        </div>
    );
};

export default AuthUserProducts;
