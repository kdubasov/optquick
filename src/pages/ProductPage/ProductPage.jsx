import React, {useState,useEffect} from 'react';
import {Alert, Container} from "react-bootstrap";
import ProductHeader from "./components/ProductHeader/ProductHeader";
import ProductSimilarProducts from "./components/ProductSimilarProducts/ProductSimilarProducts";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import ProductInfoTabs from "./components/ProductInfoTabs/ProductInfoTabs";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import Loader from "../../general-components/Loader/Loader";
import ProductSEO from "../../seo/ProductSEO";
import {handleAddView} from "../../functions/ProductViews/handleAddView";
import ViewsCounter from "./components/ViewsCounter/ViewsCounter";
import ProductLastProducts from "./components/ProductLastProducts/ProductLastProducts";

// css
import "./ProductPage.css";
import "./ProductPageMedia.css";
import {useMediaQuery} from "react-responsive";

const ProductPage = () => {

    //media query
    const media768px = useMediaQuery({query: '(max-width: 768px)'});

    //data for alert
    const [alertData,setAlertData] = useState({variant:'',show:false,text:''})

    const [path,setPath] = useState((window.location.pathname).split('/'));
    // console.log(path);

    //data for product
    const linkDBData = `/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products/${path[path.length - 1]}`;
    const productData = useGetUser(linkDBData);
    // console.log(productData);

    useEffect(() => {
        //add views for product
        handleAddView(linkDBData,productData)
        //eslint-disable-next-line
    },[productData.id])

    if (Object.values(productData).length){
        return (
            <div className={'ProductPage container py-3'}>

                {/*SEO*/}
                <ProductSEO data={productData} />

                {/*search main*/}
                <GeneralSearch />

                {//alert with warnings and errors
                    alertData.show &&
                    <Alert className={"fixed small"} variant={alertData.variant}>{alertData.text}</Alert>
                }

                {/*breadcrumbs links*/}
                <BreadCrumbs product={productData} />

                {/*box shadow container*/}
                <div className="top-container">
                    {/*header with slider and general info*/}
                    <ProductHeader productData={productData} setAlertData={setAlertData} />

                    {/*tabs with info*/}
                    <ProductInfoTabs productData={productData} />

                    {/*счетчик просмотров*/}
                    {!media768px && <ViewsCounter productData={productData} />}
                </div>

                {/*similar products slider*/}
                <ProductSimilarProducts
                    setPath={setPath}
                    nowProductId={productData.id}
                    link={`/categories/${path[path.length - 3]}/subcategories/${path[path.length - 2]}/products`}
                    setAlertData={setAlertData}
                />

                {/*last products*/}
                <ProductLastProducts
                    setPath={setPath}
                    nowProductId={productData.id}
                    setAlertData={setAlertData}/>
            </div>
        );
    }else {
        return (
            <Container className={"mt-3"}>
                <Loader />
            </Container>
        )
    }
};

export default ProductPage;
