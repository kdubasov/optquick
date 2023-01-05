import React, {useState} from 'react';
import "./TopProducts.css";
import {useTopProducts} from "../../pages-functions/MainPage/useTopProducts";
import CardProduct from "../../general-components/CardProduct/CardProduct";

const TopProducts = () => {

    //для отображения определенного кол-ва товара
    const [sliceValue,setSliceValue] = useState(6);
    const handleSlice = () => {
        if (sliceValue > 6){
            setSliceValue(6)
        }else {
            sliceValue(20)
        }
    }

    //дата с продуктами
    const data = useTopProducts();
    // console.log(data,"TopProducts");

    if (data.length){
        return (
            <div className={"TopProducts"}>
                <h4 className={"title"}>Популярные товары</h4>

                {
                    data
                        .slice(0,sliceValue)
                        .map(prod => (
                        <CardProduct product={prod} key={prod.id} />
                    ))
                }

                <div className="w-100 d-flex justify-content-center">
                    <button
                        onClick={() => handleSlice()}
                        className={"but-blue px-5"}
                    >
                        {sliceValue > 6 ? "Скрыть" : "Показать еще"}
                    </button>
                </div>
            </div>
        );
    }
};

export default TopProducts;
