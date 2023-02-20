import React from 'react';
import "./LastProducts.css";
import "./LastProductsMedia.css";
import {useLastProducts} from "../../pages-functions/MainPage/useLastProducts";
import CardProduct from "../../general-components/CardProduct/CardProduct";
import {Link} from "react-router-dom";

//продукты которых осталось меньше 100
const LastProducts = () => {

    const data = useLastProducts();
    // console.log(data,"LastProducts");

    if (data.length)
    return (
        <div className={"LastProducts"}>
            <header>
                <h4 className={"title"}>Успейте купить</h4>
            </header>

            {
                data
                    .slice(0,4)
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

export default LastProducts;
