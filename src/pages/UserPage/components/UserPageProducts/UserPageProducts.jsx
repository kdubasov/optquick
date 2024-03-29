import React from 'react';
import {useGetUserProducts} from "../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import CardProduct from "../../../../general-components/CardProduct/CardProduct";

//css
import "./UserPageProducts.css";
import "./UserPageProductsMedia.css";

const UserPageProducts = ({userId}) => {

    const userProducts = useGetUserProducts(userId);
    // console.log(userProducts,'data in UserPageProducts');

    return (
        <div className={"UserPageProducts"}>
            <h4>Найдено {userProducts.length} объявлений</h4>

            <div className="prods-container">
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
