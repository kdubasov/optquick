import React from 'react';
import CardProductSwiper from "../CardProduct/CardProductSwiper/CardProductSwiper";
import {useNavigate} from "react-router-dom";
import BriefcaseButton from "../BriefcaseButton/BriefcaseButton";
import {useUserAuth} from "../../context/AuthContext";
import {getCutWord} from "../../functions/getCutWord";
import {useMediaQuery} from "react-responsive";

//css
import "./CardSimilarProducts.css";
import "./CardSimilarProductsMedia.css";

const CardSimilarProducts = ({product,setPath,setAlertData}) => {

    const navigate = useNavigate();
    const {user} = useUserAuth();

    //media query
    const media768px = useMediaQuery({query: '(max-width: 768px)'});

    const handleSetProduct = () => {
        const url = `/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`;
        navigate(url)
        setPath(url.split('/'));
    }
    // console.log(product)
    
    return (
        <div className={"CardSimilarProducts"}>
            <div className={"swiper-container"}>
                <CardProductSwiper product={product} />
            </div>

            {/*добавить в избранное*/}
            <div className="briefcase-container">
                <BriefcaseButton elemData={product} setAlertData={setAlertData} text={false} />
            </div>

            <div className={"content"}>
                {/*Название*/}
                <h6 onClick={() => handleSetProduct()} className={"title"}>
                    {getCutWord(product.title,media768px?20:50)}
                </h6>
                {/*price*/}
                <h5>{product.price + ' ₽/шт'}</h5>
                {/*Мин заказ*/}
                <small className={"min-order"}>
                    {media768px ? "Заказ" : "Минимальный заказ"} от
                    <b>{product.minOrder}</b>шт.
                </small>
                {//проверка на товар пользователя который сейчас смотрит его
                    (user && (user.uid === product.userUid)) ?
                        <p className={"bottom m-0"}>Ваше объявление</p>:
                        <p className={"bottom m-0"}>
                            В наличии:
                            <b>{product.amount}</b>шт.
                        </p>
                }
            </div>
        </div>
    );
};

export default CardSimilarProducts;
