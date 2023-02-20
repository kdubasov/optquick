import React from 'react';
import {Link} from "react-router-dom";
import {useTopProducts} from "../../pages-functions/MainPage/useTopProducts";
import CardProduct from "../../general-components/CardProduct/CardProduct";

const NewProducts = () => {

    const data = useTopProducts();

    return (
        <div className={"NewProducts LastProducts"}>
            <header>
                <h4 className={"title"}>Будьте первыми</h4>
            </header>

            {
                data
                    .sort((a,b) => b.dateNoRedact - a.dateNoRedact)
                    .slice(0,8)
                    .map(prod => (
                        <CardProduct product={prod} key={prod.id} />
                    ))
            }

            <div className="link-container">
                <Link to={`/categories`}>Перейти к каталогу</Link>
            </div>
        </div>
    );
};

export default NewProducts;
