import React from 'react';
import {Badge, Button} from "react-bootstrap";
import CardProductSwiper from "./CardProductSwiper";
import {Link} from "react-router-dom";
import BriefcaseButton from "../../../../general-components/BriefcaseButton/BriefcaseButton";
import {getAdmin} from "../../../../pages-functions/AdminPage/getAdmin";
import DeleteCategoryButton from "../../Categories/DeleteCategoryButton";
import {useUserAuth} from "../../../../context/AuthContext";

const CardProduct = ({product}) => {

    const { user } = useUserAuth();

    const databaseUrl = `/categories/${product.selectCategory}/subcategories/${product.selectSubCategory}/products/${product.id}`;

    return (
        <div className={"CardProduct w-25 m-1 p-2 border"}>

            {/*swiper with images for product*/}
            <CardProductSwiper product={product} />

            {/*Название*/}
            <Badge bg={"secondary"}>{product.title}</Badge>
            <br />
            {/*Цена*/}
            <small>{product.price + '₽/шт'}</small>
            <br />
            {/*Мин заказ*/}
            <small style={{fontSize:12,textDecoration:"underline"}}>
                Минимальный заказ от {product.minOrder} шт.
            </small>
            <br />
            {/*Доставка*/}
            {
                product.deliveryPeriod &&
                <Badge>
                    Доставка: {product.deliveryPeriod}дн.
                </Badge>
            }
            {/*ссылка на страницу товара*/}
            <Link to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}>
                <Button size={"sm"} variant={"outline-dark"} className={"mt-2 w-100"}>
                    Перейти к товару
                </Button>

                <BriefcaseButton elemData={product} setAlertData={false} />
            </Link>

            {/*/дата публикации товара*/}
            <p className={"m-0"} style={{fontSize:11,opacity:.8}}>
                Дата публикации: {product.date}
            </p>

            {/*delete product button with check admin*/}
            {
                getAdmin() &&
                <DeleteCategoryButton url={databaseUrl} text={"Удалить товар"} />
            }

            {/*проверка на товар пользователя который сейчас смотрит его*/}
            {
                (user && (user.uid === product.userUid)) &&
                <Badge>Ваше объявление</Badge>
            }
        </div>
    );
};

export default CardProduct;
