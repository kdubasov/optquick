import React, {useState} from 'react';
import {Alert, Badge, Spinner} from "react-bootstrap";
import {useGetUserProducts} from "../../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import {useUserAuth} from "../../../../../context/AuthContext";
import {getPathLastWord} from "../../../../../pages-functions/CategoriesPage/getPathLastWord";
import CardProductSwiper from "../../../../CardProduct/CardProductSwiper/CardProductSwiper";
import RedactUserProdForm from "./RedactUserProdForm";
import MessageAlert from "../../../../MessageAlert/MessageAlert";
import {Link} from "react-router-dom";

const RedactUserProduct = () => {

    const { user } = useUserAuth();

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    //product id from path
    const productId = getPathLastWord(window.location.pathname);

    //all user products
    const userProducts = useGetUserProducts(user.uid);
    // console.log(userProducts,'data in UserPageProducts');
    const nowProduct = userProducts.filter(product => product.id === productId)[0];
    // console.log(nowProduct,'nowProduct in RedactUserProduct');


    return (
        <div className={'RedactUserProduct py-3 container'}>

            <Badge className={"mb-2"}>
                <Link className={"text-white"} to={'/userProfile'}>Назад</Link>
            </Badge>

            {
                nowProduct ?
                    <>
                        <h4><Badge>Редактирование товара "{nowProduct.title}"</Badge></h4>

                            {/*slider with product photo*/}
                            <div className="w-50 mb-3">
                                <CardProductSwiper product={nowProduct} />
                            </div>

                            <div className={"w-100 p-2 border"}>
                                <RedactUserProdForm data={nowProduct} setRes={setRes} />
                            </div>
                    </>:
                    <Alert className={"p-2 small d-flex justify-content-between align-items-center"}>
                        Дождитесь загрузки данных о товаре...
                        <Spinner animation={"border"} size={"sm"} />
                    </Alert>
            }

            <MessageAlert res={res} />

        </div>
    )
};

export default RedactUserProduct;
