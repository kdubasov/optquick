import React from 'react';
import {Badge} from "react-bootstrap";
import {useGetUserProducts} from "../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import CardProduct from "../../../../general-components/CardProduct/CardProduct";

const UserPageProducts = ({userId}) => {

    const userProducts = useGetUserProducts(userId);
    // console.log(userProducts,'data in UserPageProducts');

    return (
        <div className={"UserPageProducts w-100 my-2 p-2 border"}>
            <h4><Badge>Товары пользователя</Badge></h4>

            <div className="w-100 d-flex flex-wrap justify-content-between">
                {
                    userProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))
                }
            </div>

        </div>
    );
};

export default UserPageProducts;
