import React from 'react';
import {Badge} from "react-bootstrap";
import {useGetCategory} from "../../../../pages-functions/AdminPage/Categories/useGetCategory";
import CardSimilarProducts from "./CardSimilarProducts";

const ProductSimilarProducts = ({link,nowProductId,setPath}) => {

    const dataSimilarProducts = useGetCategory(link);
    // console.log(dataSimilarProducts);


    if (dataSimilarProducts.length){
        return (
            <div className={'ProductSimilarProducts border p-2'}>
                <h4><Badge>Похожие товары</Badge></h4>

                <div className="w-100 d-flex">
                    {
                        dataSimilarProducts
                            .filter(product => product.id !== nowProductId)
                            .map(product => (
                            <CardSimilarProducts key={product.id} product={product} setPath={setPath} />
                        ))
                    }
                </div>
            </div>
        );
    }else return false;
};

export default ProductSimilarProducts;
