import React from 'react';
import CardSimilarProducts from "../../../../general-components/CardSimilarProducts/CardSimilarProducts";
import {useLastProducts} from "../../../../pages-functions/MainPage/useLastProducts";

const ProductLastProducts = ({nowProductId,setPath,setAlertData}) => {

    const data = useLastProducts();
    // console.log(data,"LastProducts");


    if (data.length && data.filter(product => product.id !== nowProductId).length){
        return (
            <div className={'ProductLastProducts ProductSimilarProducts'}>
                <h4 className={"title"}>Успейте купить</h4>

                <div className="products-container">
                    {
                        data
                            .filter(product => product.id !== nowProductId)
                            .slice(0,4)
                            .map(product => (
                                <CardSimilarProducts key={product.id} product={product} setPath={setPath} setAlertData={setAlertData} />
                            ))
                    }
                </div>
            </div>
        );
    }
};

export default ProductLastProducts;