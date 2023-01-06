import React from 'react';
import "./ProductSimilarProducts.css";
import {useGetCategory} from "../../../../pages-functions/AdminPage/Categories/useGetCategory";
import CardSimilarProducts from "./CardSimilarProducts";

const ProductSimilarProducts = ({link,nowProductId,setPath,setAlertData}) => {

    const dataSimilarProducts = useGetCategory(link);
    // console.log(dataSimilarProducts);


    if (dataSimilarProducts.length && dataSimilarProducts.filter(product => product.id !== nowProductId).length){
        return (
            <div className={'ProductSimilarProducts'}>
                <h4 className={"title"}>Смотрите также</h4>

                <div className="products-container">
                    {
                        dataSimilarProducts
                            .filter(product => product.id !== nowProductId)
                            .map(product => (
                            <CardSimilarProducts key={product.id} product={product} setPath={setPath} setAlertData={setAlertData} />
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default ProductSimilarProducts;
