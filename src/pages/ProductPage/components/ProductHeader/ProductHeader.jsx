import React, {useState} from 'react';
import CardProductSwiper from "../../../../general-components/CardProduct/CardProductSwiper/CardProductSwiper";
import {Alert} from "react-bootstrap";
import ProductUserData from "../ProductUserData/ProductUserData";
import BriefcaseButton from "../../../../general-components/BriefcaseButton/BriefcaseButton";
import {useUserAuth} from "../../../../context/AuthContext";
import "./ProductHeader.css";
import {useGetUser} from "../../../../general-components/Auth/UserProfile/functions/useGetUser";


const ProductHeader = ({productData,setAlertData}) => {

    //data seller
    const userData = useGetUser(`/users/${productData.userUid}`);
    // console.log(userData);

    const { user } = useUserAuth();
    const [showUser,setShowUser] = useState(false);
    // console.log(productData,"productData ProductHeader")

    return (
        <header className={"ProductHeader"}>

            <div className="left-container">
                <h2>{productData.title}</h2>
                <div className="slider-container">
                    <CardProductSwiper product={productData} />
                </div>
            </div>

            <div className={"right"}>

                {/*основная инфа*/}
                <div className={"market-data"}>
                    {//проверка на товар пользователя который сейчас смотрит его
                        (user && (user.uid === productData.userUid)) &&
                        <p className={"m-0 my-product"}>Ваше объявление</p>
                    }
                    <h1>{productData.price} ₽/шт.</h1>
                    <p className={"m-0"}>
                        Минимальный заказ от {productData.minOrder + ' штук. '}
                    </p>
                    <p className={"m-0 text-decoration-none"} style={{color:"inherit"}}>
                        В наличии {productData.amount} штук.
                    </p>
                </div>

                {!user &&
                    <Alert className={"m-0 p-2 small"}>
                        Для того чтобы добавить товар в избранное вы должны авторизоваться.
                    </Alert>
                }

                {/*добавить в избранное*/}
                <BriefcaseButton elemData={productData} setAlertData={setAlertData} />

                {/*seller show*/}
                <button
                    className={"but-blue seller"}
                    onClick={() => setShowUser(!showUser)}
                >
                    Связаться с продавцом
                    <img
                        className={showUser ? "revert" : ""}
                        src={"/images/icons/arrow.svg"}
                        alt={"arrow-down"}
                    />
                </button>
                {//user info
                    showUser &&
                    <div className={"user-data"}>
                        {
                            productData.showPhoneNumber &&
                            <p className={"m-0"}>
                                Номер телефона:
                                <a href={`tel:${user.phoneNumber}`} className={"mx-1"}>
                                    {user.phoneNumber}
                                </a>
                            </p>
                        }
                        {
                            productData.showEmailAddress &&
                            <p className={"m-0"}>
                                Почта:
                                <a href={`mailto:${userData?.email}`} className={"mx-1"}>
                                    {userData?.email}
                                </a>
                            </p>
                        }
                    </div>
                }

                {//user data
                    Object.values(userData).length &&
                    <ProductUserData productData={productData} userData={userData} />
                }
            </div>
        </header>
    );
};

export default ProductHeader;
