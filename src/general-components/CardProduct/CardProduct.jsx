import React from 'react';
import CardProductSwiper from "./CardProductSwiper/CardProductSwiper";
import {Link} from "react-router-dom";
import BriefcaseButton from "../BriefcaseButton/BriefcaseButton";
import {getAdmin} from "../../pages-functions/AdminPage/getAdmin";
import DeleteCategoryButton from "../AdminPage/Categories/DeleteCategoryButton";
import {useUserAuth} from "../../context/AuthContext";
import "./CardProduct.css";
import {getCutWord} from "../../functions/getCutWord";

const CardProduct = ({product}) => {

    const { user } = useUserAuth();

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
                <h6>{getCutWord(product.title,50)}</h6>

                {/*Цена*/}
                <h5>{Number(product.price).toLocaleString("RU") + " ₽/шт"}</h5>

                {/*Мин заказ*/}
                <small className={"min-order"}>
                    Минимальный заказ от {product.minOrder} шт.
                </small>

                {/*ссылка на страницу товара*/}
                <Link
                    className={"w-100 but-blue"}
                    to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}
                >
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
                            В наличии:
                            <strong>{product.amount}</strong>шт.
                        </p>
                }
            </div>
        </div>
    );
};

export default CardProduct;
