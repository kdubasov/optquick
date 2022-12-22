import React from 'react';
import CardProductSwiper from "../../../../general-components/CardProduct/CardProductSwiper/CardProductSwiper";
import {Badge, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import BriefcaseButton from "../../../../general-components/BriefcaseButton/BriefcaseButton";

const CardSimilarProducts = ({product,setPath,setAlertData}) => {

    const navigate = useNavigate();

    const handleSetProduct = () => {
        navigate(`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`)
        setPath(`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`.split('/'));
    }
    
    return (
        <div style={{width:"32%"}} className={"CardSimilarProducts m-1 p-1 border"}>
            <div style={{width:"100%",height:"200px"}}>
                <CardProductSwiper product={product} />
            </div>

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

            <Button
                size={"sm"}
                variant={"outline-dark"}
                className={"mt-2 w-100"}
                onClick={() => handleSetProduct()}
            >
                Перейти к товару
            </Button>

            <BriefcaseButton elemData={product} setAlertData={setAlertData} text={false} />
        </div>
    );
};

export default CardSimilarProducts;
