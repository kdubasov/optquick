import React from 'react';
import "./LastProducts.css";
import {useLastProducts} from "../../pages-functions/MainPage/useLastProducts";
import CardProduct from "../../general-components/CardProduct/CardProduct";

//продукты которых осталось меньше 100
const LastProducts = () => {

    const data = useLastProducts();
    // console.log(data,"LastProducts");

    return (
        <div className={"LastProducts"}>
            <h4 className={"title"}>Успейте купить</h4>
            <p className="small descr">
                Здесь показаны некоторые товары, остаток которых не прывашает 100 штук.
            </p>

            {
                data
                    .slice(0,4)
                    .map(prod => (
                    <CardProduct product={prod} key={prod.id} />
                ))
            }
        </div>
    );
};

export default LastProducts;
