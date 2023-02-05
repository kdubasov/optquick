import React, {useState} from 'react';
import "./TopProducts.css";
import "./TopProductsMedia.css";
import {useTopProducts} from "../../pages-functions/MainPage/useTopProducts";
import CardProduct from "../../general-components/CardProduct/CardProduct";

const TopProducts = () => {

    //для отображения определенного кол-ва товара
    const [sliceValue,setSliceValue] = useState(8);
    const handleSlice = () => {
        if (sliceValue > 8){
            setSliceValue(8)
        }else {
            setSliceValue(20)
        }
    }

    //дата с продуктами
    const data = useTopProducts();
    // console.log(data,"TopProducts");

    if (data.length){
        return (
            <div className={"TopProducts"}>
                <h4 className={"title"}>
                    Рекомендации для вас
                </h4>

                {
                    data
                        .slice(0,sliceValue)
                        .map(prod => (
                        <CardProduct product={prod} key={prod.id} />
                    ))
                }

                <div className="show-more">
                    <p onClick={() => handleSlice()}>
                        {sliceValue > 8 ? "Скрыть дополнительные товары" : "Показать больше товаров"}
                    </p>
                </div>
            </div>
        );
    }
};

export default TopProducts;
