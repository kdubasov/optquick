import React, {useState} from 'react';
import {Badge, Spinner} from "react-bootstrap";
import ProductHeader from "./components/ProductHeader";
import {Link} from "react-router-dom";
import ProductSimilarProducts from "./components/ProductSimilarProducts/ProductSimilarProducts";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import ProductInfoTabs from "./components/ProductInfoTabs";

const ProductPage = () => {

    const [path,setPath] = useState((window.location.pathname).split('/'));
    // console.log(path);

    //data for product
    const linkDBData = `/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products/${path[path.length - 1]}`;
    const productData = useGetUser(linkDBData);
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
                        {/*header with slider and general info*/}
                        <ProductHeader productData={productData} />

                        <ProductInfoTabs productData={productData} />

                        {/*similar products slider*/}
                        <ProductSimilarProducts
                            setPath={setPath}
                            nowProductId={productData.id}
                            link={`/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products`}
                        />
                    </>:
                    <Spinner animation={"border"} variant={"primary"} className={'my-4'} />
            }

        </div>
    );
};

export default ProductPage;
