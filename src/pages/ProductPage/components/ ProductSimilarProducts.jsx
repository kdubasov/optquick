import React from 'react';
import {Badge} from "react-bootstrap";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
import CardProduct from "../../../pages-components/AdminPage/Products/CardProduct/CardProduct";

const ProductSimilarProducts = ({link}) => {

    const dataSimilarProducts = useGetCategory(link);
    // console.log(dataSimilarProducts);


    if (dataSimilarProducts.length){
        return (
            <div className={'ProductSimilarProducts border p-2'}>
                <h4><Badge>Похожие товары</Badge></h4>

                <div className="w-100 d-flex">
                    {
                        dataSimilarProducts.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        );
    }else return false;
};

export default ProductSimilarProducts;
