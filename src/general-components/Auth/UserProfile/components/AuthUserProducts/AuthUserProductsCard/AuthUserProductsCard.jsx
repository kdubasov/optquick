import React from 'react';
import CardProductSwiper from "../../../../../CardProduct/CardProductSwiper/CardProductSwiper";
import {Link} from "react-router-dom";
import DeleteCategoryButton from "../../../../../AdminPage/Categories/DeleteCategoryButton";
import {getCutWord} from "../../../../../../functions/getCutWord";
import {useMediaQuery} from "react-responsive";

//css
import "./AuthUserProductsCard.css";
import "./AuthUserProductsCardMedia.css";

const AuthUserProductsCard = ({product}) => {

    const databaseUrl = `/categories/${product.selectCategory}/subcategories/${product.selectSubCategory}/products/${product.id}`;

    const media469px = useMediaQuery({query: '(max-width: 469px)'});
    const media768px = useMediaQuery({query: '(max-width: 768px)'});
    const media991px = useMediaQuery({query: '(max-width: 991px)'});

    return (
        <div className={"AuthUserProductsCard"}>

            <div className="left-card">

                {/*swiper with images for product*/}
                <div className={"slider-container"}>
                    <CardProductSwiper product={product} />
                </div>

                <div className={"content"}>
                    {/*Название*/}
                    <h5 className={"m-0"}>
                        {getCutWord(product.title,media768px?20:50)}
                    </h5>

                    {//Доставка
                        product.deliveryPeriod ?
                            <p className={"center small opacity-75"}>
                                {!media991px && <>Доставка: {product.deliveryPeriod}дн.<br /></>}
                                {!media469px && <>Всего {product.amount} штук.</>}
                            </p>:
                            <p className={"center small opacity-75"}>
                                {!media991px && <>Дата публикации: {product.date}.<br /></>}
                                {!media469px && <>Всего {product.amount} штук.</>}
                            </p>
                    }

                    {/*Цена*/}
                    <h4 className={"m-0"}>
                        {Number(product.price).toLocaleString("RU") + " ₽/шт"}
                    </h4>

                    {/*Мин заказ i kolvo*/}
                    <p className={"m-0 min-order"}>
                        {media768px ? "Заказ" : "Минимальный заказ"} от {product.minOrder} шт.
                    </p>
                </div>
            </div>

            <div className="right-card">
                {/*ссылка на страницу товара*/}
                <Link to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}>
                    <button className={"w-100 but-blue border"}>
                        <img src="/images/icons/arr-go.svg" alt="go to product"/>
                    </button>
                </Link>

                {/*ссылка на редоктирование товара*/}
                <Link to={`/userProfile/redactProduct/${product.id}`}>
                    <button className={"w-100 but-light"}>
                        <img src="/images/icons/redact-product.svg" alt="redact"/>
                    </button>
                </Link>

                <div className="line" />

                {/*delete product button*/}
                <DeleteCategoryButton
                    url={databaseUrl}
                    text={"Снять с продажи"}
                    img={true}
                />
            </div>
        </div>
    );
};

export default AuthUserProductsCard;
