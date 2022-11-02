import React from 'react';
import {useGetProductObj} from "../../pages-functions/AdminPage/GetProducts/useGetProductObj";
import {Badge, Spinner} from "react-bootstrap";
import ProductHeader from "./components/ProductHeader";
import {Link} from "react-router-dom";
import ProductSimilarProducts from "./components/ ProductSimilarProducts";

const ProductPage = () => {

    const path = (window.location.pathname).split('/');
    // console.log(path);

    //data for product
    const linkDBData = `/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products/${path[path.length - 1]}`;
    const productData = useGetProductObj(linkDBData);
    // console.log(productData);


    return (
        <div className={'ProductPage container py-3'}>

            <Link to={`/categories/${path[path.length - 3]}/${path[path.length - 2]}`}>
                <Badge>
                    Назад к товарам
                </Badge>
            </Link>

            {
                Object.values(productData).length ?
                    <>
                        <div className={'border p-3 w-100 my-3'}>
                            <strong>{JSON.stringify(productData)}</strong>
                        </div>

                        {/*header with slider and general info*/}
                        <ProductHeader productData={productData} />

                        {/*similar products slider*/}
                        <ProductSimilarProducts
                            link={`/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products`}
                        />
                    </>:
                    <Spinner animation={"border"} variant={"primary"} className={'my-4'} />
            }

        </div>
    );
};

export default ProductPage;
