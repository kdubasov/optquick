import React, {useState} from 'react';
import CardProductSwiper from "../../../../general-components/CardProduct/CardProductSwiper/CardProductSwiper";
import {Alert} from "react-bootstrap";
import ProductUserData from "../ProductUserData/ProductUserData";
import BriefcaseButton from "../../../../general-components/BriefcaseButton/BriefcaseButton";
import {useUserAuth} from "../../../../context/AuthContext";
import {useGetUser} from "../../../../general-components/Auth/UserProfile/functions/useGetUser";
import {handleAddContacts} from "../../../../functions/ProductViews/handleAddContacts";

//css
import "./ProductHeader.css";
import "./ProductHeaderMedia.css";
import ViewsCounter from "../ViewsCounter/ViewsCounter";
import {useMediaQuery} from "react-responsive";


const ProductHeader = ({productData,setAlertData}) => {

    //media query
    const media768px = useMediaQuery({query: '(max-width: 768px)'});

    //data seller
    const userData = useGetUser(`/users/${productData.userUid}`);
    // console.log(userData);

    const { user } = useUserAuth();
    const [showUser,setShowUser] = useState(false);
    const handleOpenContacts = () => {
        if (!showUser){
            setShowUser(true);
            const url = `/categories/${productData.selectCategory}/subcategories/${productData.selectSubCategory}/products/${productData.id}`;
            handleAddContacts(url,productData);
        }else {
            setShowUser(false);
        }
    }
    // console.log(productData,"productData ProductHeader")

    return (
        <header className={"ProductHeader"}>

            <div className="left-container">
                <h2>{productData.title}</h2>

                {
                    media768px &&
                    <ViewsCounter productData={productData} />
                }

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
                    <h1>{Number(productData.price).toLocaleString("RU")} ₽/шт.</h1>
                    <p className={"m-0"}>
                        Минимальный заказ от {productData.minOrder + ' штук. '}
                    </p>
                    <p className={"m-0 text-decoration-none"} style={{color:"inherit"}}>
                        В наличии {productData.amount} штук.
                    </p>
                </div>

                {!user &&
                    <Alert className={"m-0 p-2 small"}>
                        Для того чтобы добавить товар в избранное
                        и видеть контакты продавца вы должны пройти авторизацию.
                    </Alert>
                }

                {/*добавить в избранное*/}
                <BriefcaseButton elemData={productData} setAlertData={setAlertData} />

                {/*seller show*/}
                {
                    user &&
                    <button
                        className={"but-blue seller"}
                        onClick={handleOpenContacts}
                    >
                        Связаться с продавцом
                        <img
                            className={showUser ? "revert" : ""}
                            src={"/images/icons/arrow.svg"}
                            alt={"arrow-down"}
                        />
                    </button>
                }

                {//user info
                    showUser &&
                    <div className={"user-data"}>
                        {
                            productData.showPhoneNumber &&
                            <p className={"m-0"}>
                                Номер телефона:
                                <a href={`tel:${userData.phoneNumber}`} className={"mx-1"}>
                                    {userData.phoneNumber}
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
                    Boolean(Object.values(userData).length) &&
                    <ProductUserData productData={productData} userData={userData} />
                }
            </div>
        </header>
    );
};

export default ProductHeader;
