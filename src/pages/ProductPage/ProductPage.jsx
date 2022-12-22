import React, {useState} from 'react';
import {Spinner} from "react-bootstrap";
import ProductHeader from "./components/ProductHeader/ProductHeader";
import ProductSimilarProducts from "./components/ProductSimilarProducts/ProductSimilarProducts";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import ProductInfoTabs from "./components/ProductInfoTabs/ProductInfoTabs";
import ProductAlert from "./components/ProductAlert";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import "./ProductPage.css";

const ProductPage = () => {

    const [alertData,setAlertData] = useState({variant:'',show:false,text:''})

    const [path,setPath] = useState((window.location.pathname).split('/'));
    // console.log(path);

    //data for product
    const linkDBData = `/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products/${path[path.length - 1]}`;
    const productData = useGetUser(linkDBData);
    // console.log(productData);

    if (Object.values(productData).length){
        return (
            <div className={'ProductPage container py-3'}>

                {/*search*/}
                <GeneralSearch />

                {/*alert with warnings and errors*/}
                <ProductAlert show={alertData.show} variant={alertData.variant} text={alertData.text} />

                {/*breadcrumbs links*/}
                <BreadCrumbs product={productData} />

                {/*box shadow container*/}
                <div className="top-container">
                    {/*header with slider and general info*/}
                    <ProductHeader productData={productData} setAlertData={setAlertData} />

                    <ProductInfoTabs productData={productData} />
                </div>

                {/*similar products slider*/}
                <ProductSimilarProducts
                    setPath={setPath}
                    nowProductId={productData.id}
                    link={`/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products`}
                    setAlertData={setAlertData}
                />

            </div>
        );
    }else {
        return (
            <Spinner animation={"border"} variant={"primary"} />
        )
    }
};

export default ProductPage;
