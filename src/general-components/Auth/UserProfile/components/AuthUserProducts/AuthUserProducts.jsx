import React from 'react';
import {useGetUserProducts} from "../../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import {Alert} from "react-bootstrap";
import AuthUserProductsCard from "./AuthUserProductsCard";

const AuthUserProducts = ({userId}) => {

    const userProducts = useGetUserProducts(userId);
    // console.log(userProducts,'data in UserPageProducts');

    return (
        <div className={'AuthUserProducts'}>
            {
                Boolean(userProducts.length) &&
                <h4 className={"mb-3"}>
                    Мои объявления {userProducts.length}
                </h4>
            }

            {
                userProducts.length ?
                    userProducts.map(product => (
                        <AuthUserProductsCard key={product.id} product={product} />
                    )):
                    <Alert className={"w-100 p-2 small"}>
                        Вы не добавлили ни одного товара
                    </Alert>
                }
        </div>
    );
};

export default AuthUserProducts;
