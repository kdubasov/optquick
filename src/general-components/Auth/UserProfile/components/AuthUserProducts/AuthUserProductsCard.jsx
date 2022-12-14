import React from 'react';
import CardProductSwiper from "../../../../CardProduct/CardProductSwiper/CardProductSwiper";
import {Link} from "react-router-dom";
import DeleteCategoryButton from "../../../../AdminPage/Categories/DeleteCategoryButton";
import "./AuthUserProducts.css";
import {getCutWord} from "../../../../../functions/getCutWord";

const AuthUserProductsCard = ({product}) => {

    const databaseUrl = `/categories/${product.selectCategory}/subcategories/${product.selectSubCategory}/products/${product.id}`;

    return (
        <div className={"AuthUserProductsCard"}>

            <div className="left">

                {/*swiper with images for product*/}
                <div className={"slider-container"}>
                    <CardProductSwiper product={product} />
                </div>

                <div className={"content"}>
                    {/*Название*/}
                    <h5 className={"m-0"}>{getCutWord(product.title,50)}</h5>

                    {//Доставка
                        product.deliveryPeriod ?
                            <p className={"center small"}>
                                Доставка: {product.deliveryPeriod}дн.<br />
                                Всего {product.amount} штук.
                            </p>:
                            <p className={"center small"}>
                                Дата публикации: {product.date}.<br />
                                Всего {product.amount} штук.
                            </p>
                    }

                    {/*Цена*/}
                    <h4 className={"m-0"}>
                        {Number(product.price).toLocaleString("RU") + " ₽/шт"}
                    </h4>

                    {/*Мин заказ i kolvo*/}
                    <p className={"m-0 min-order"}>
                        Минимальный заказ от {product.minOrder} штук.
                    </p>
                </div>
            </div>

            <div className="right">
                {/*ссылка на страницу товара*/}
                <Link to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}>
                    <button className={"w-100 but-blue border"}>
                        К товару
                    </button>
                </Link>

                {/*ссылка на редоктирование товара*/}
                <Link to={`/userProfile/redactProduct/${product.id}`}>
                    <button className={"w-100 but-light"}>
                        Редактировать
                    </button>
                </Link>

                <div className="line" />

                {/*delete product button*/}
                <DeleteCategoryButton url={databaseUrl} text={"Снять с продажи"} />
            </div>
        </div>
    );
};

export default AuthUserProductsCard;
