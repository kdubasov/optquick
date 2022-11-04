import React from 'react';
import {Badge} from "react-bootstrap";
import {useGetUserProducts} from "../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import UserPageProdCard from "./UserPageProdCard";

const UserPageProducts = ({userId}) => {

    const userProducts = useGetUserProducts(userId);
    console.log(userProducts,'data in UserPageProducts');

    return (
        <div className={"UserPageProducts w-100 my-2 p-2 border"}>
            <h4><Badge>Товары пользователя</Badge></h4>

            <div className="w-100 box m-1 p-1 border d-flex flex-wrap">
                {
                    userProducts.map(product => (
                        <UserPageProdCard key={product.id} productData={product} />
                    ))
                }
            </div>

        </div>
    );
};

export default UserPageProducts;
