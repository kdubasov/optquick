import React from 'react';
import CardProductSwiper from "../../../../general-components/CardProduct/CardProductSwiper/CardProductSwiper";
import {useNavigate} from "react-router-dom";
import BriefcaseButton from "../../../../general-components/BriefcaseButton/BriefcaseButton";
import {useUserAuth} from "../../../../context/AuthContext";

const CardSimilarProducts = ({product,setPath,setAlertData}) => {

    const navigate = useNavigate();
    const {user} = useUserAuth();

    const handleSetProduct = () => {
        navigate(`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`)
        setPath(`/categories/${product.selectCategory}/${product.selectSubCategory}/${product.id}`.split('/'));
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
                {
                    (user && user.uid === product.userUid ) &&
                    <small className={"text-decoration-none"}>Ваш товар</small>
                }
                {/*Название*/}
                <h6>
                    {product.title}
                </h6>
                {/*price*/}
                <h5>{product.price + ' ₽/шт'}</h5>
                {/*Мин заказ*/}
                <small>
                    Мин. заказ от {product.minOrder} штук.
                </small>

                <button className={"w-100 but-blue mt-3"} onClick={() => handleSetProduct()}>
                    Перейти к товару
                </button>
            </div>
        </div>
    );
};

export default CardSimilarProducts;
