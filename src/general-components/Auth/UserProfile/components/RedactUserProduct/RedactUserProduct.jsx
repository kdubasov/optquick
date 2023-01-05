import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import {useGetUserProducts} from "../../../../../pages-functions/AdminPage/GetProducts/useGetUserProducts";
import {useUserAuth} from "../../../../../context/AuthContext";
import {getPathLastWord} from "../../../../../pages-functions/CategoriesPage/getPathLastWord";
import RedactUserProdForm from "./RedactUserProdForm";
import MessageAlert from "../../../../MessageAlert/MessageAlert";
import {Link} from "react-router-dom";
import "./RedactUserProduct.css";
import Loader from "../../../../Loader/Loader";

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
        <Container className={'RedactUserProduct'}>

            <Link className={"back-link"} to={'/userProfile'}>
                Вернуться назад
            </Link>

            {
                nowProduct ?
                    <>
                        <h3>Редактирование товара "{nowProduct.title}"</h3>

                        <p className="small warning">
                            В настоящее время редактирование фото для товаров невозможно,
                            в скором времени мы решим эту проблему. Спасибо за понимание.
                        </p>

                        <RedactUserProdForm data={nowProduct} setRes={setRes} />
                    </>:
                    <Loader />
            }

            <MessageAlert res={res} />

        </Container>
    )
};

export default RedactUserProduct;
