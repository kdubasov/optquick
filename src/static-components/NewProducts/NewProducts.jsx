import React from 'react';
import {Link} from "react-router-dom";
import {useTopProducts} from "../../pages-functions/MainPage/useTopProducts";
import CardProduct from "../../general-components/CardProduct/CardProduct";

const NewProducts = () => {

    const data = useTopProducts();

    return (
        <div className={"NewProducts LastProducts"}>
            <header>
                <h4 className={"title"}>Будьте первым</h4>
                <p className="small descr">
                    Здесь представлены товары, выставленные на продажу в последнее время.
                    Хорошие товары быстро раскупают, поэому мы стараемся показать их на главной странице.
                    Данный блок включает в себя не полный список товаров,
                    для ознакомления со всеми товарами вы можете перейти в
                    <Link to={"/categories"}>каталог</Link>
                </p>
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
