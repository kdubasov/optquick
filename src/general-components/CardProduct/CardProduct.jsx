import React from 'react';
import CardProductSwiper from "./CardProductSwiper/CardProductSwiper";
import {Link} from "react-router-dom";
import BriefcaseButton from "../BriefcaseButton/BriefcaseButton";
import {getAdmin} from "../../pages-functions/AdminPage/getAdmin";
import DeleteCategoryButton from "../AdminPage/Categories/DeleteCategoryButton";
import {useUserAuth} from "../../context/AuthContext";
import "./CardProduct.css";
import "./CardProductMedia.css";
import {getCutWord} from "../../functions/getCutWord";
import {useMediaQuery} from "react-responsive";

const CardProduct = ({product}) => {

    const { user } = useUserAuth();

    //media query
    const media768px = useMediaQuery({query: '(max-width: 768px)'});

    const productUrl = `/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`;
    const databaseUrl = `/categories/${product.selectCategory}/subcategories/${product.selectSubCategory}/products/${product.id}`;

    return (
        <div className={"CardProduct"}>

            {/*добавить удлаить из избранного*/}
            <div className={"briefcase-container"}>
                <BriefcaseButton elemData={product} setAlertData={false} text={false} />
            </div>

            {/*swiper with images for product*/}
            <div className={"slider-container"}>
                <CardProductSwiper product={product} />
            </div>


            <div className="content">
                {/*Название*/}
                <Link
                    className={"title"}
                    to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}
                >
                    <h6>{getCutWord(product.title,media768px?20:50)}</h6>
                </Link>

                {/*Цена*/}
                <h5>{Number(product.price).toLocaleString("RU") + " ₽/шт"}</h5>

                {/*Мин заказ*/}
                <small className={"min-order"}>
                    <Link to={productUrl}>
                        {media768px ? "Заказ" : "Минимальный заказ"} от {product.minOrder} шт.
                    </Link>
                </small>

                {/*ссылка на страницу товара*/}
                <Link className={"w-75 but-blue"} to={productUrl}>
                    Перейти к товару
                </Link>

                {//delete product button with check admin
                    getAdmin() &&
                    <DeleteCategoryButton url={databaseUrl} text={"Удалить товар"} />
                }

                {//проверка на товар пользователя который сейчас смотрит его
                    (user && (user.uid === product.userUid)) ?
                        <p className={"bottom"}>Ваше объявление</p>:
                        <p className={"bottom"}>
                            Осталось:
                            <strong>{product.amount}</strong>шт.
                        </p>
                }
            </div>
        </div>
    );
};

export default CardProduct;
