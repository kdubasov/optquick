import React from 'react';
import CardProductSwiper from "../../../../pages-components/AdminPage/Products/CardProduct/CardProductSwiper";
import {Badge, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const CardSimilarProducts = ({product,setPath}) => {

    const navigate = useNavigate();

    const handleSetProduct = () => {
        navigate(`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`)
        setPath(`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`.split('/'));
    }
    
    return (
        <div className={"CardSimilarProducts w-50 m-1 p-1 border"}>
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
            {/*<Link to={`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`}>*/}
            {/*</Link>*/}

            <Button
                size={"sm"}
                variant={"outline-dark"}
                className={"mt-2 w-100"}
                onClick={() => handleSetProduct()}
            >
                Перейти к товару
            </Button>
        </div>
    );
};

export default CardSimilarProducts;
