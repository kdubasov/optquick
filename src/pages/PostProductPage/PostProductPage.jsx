import React from 'react';
import {Container} from "react-bootstrap";
import AddProduct from "./AddProducts/AddProduct";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import {useUserAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import "./PostProductPage.css";
import PostProductSEO from "../../seo/PostProductSEO";

const PostProductPage = () => {

    //context user data
    const { user } = useUserAuth();

    const userDataFromRealtimeDB = useGetUser(`/users/${user.uid}`);
    // console.log(userDataFromRealtimeDB,'UserDataAdded');

    return (
        <Container className={'PostProductPage'}>

            {/*SEO*/}
            <PostProductSEO />

            <h3 className={"title"}>
                Разместить объявление
            </h3>
            <p className="small warning">
                Администрация сайта настоятельно просит с уважением относится к другим пользователяем
                и выкладывать только реальные объявления, в которых вы указываете реальные данные о товаре.
                Объявления, которые не соответствуют общепринятым нормам, будут удалены администрацией сайта.
                При повторной попытке выставления похожих объявлений пользователь будет заблокирован на площадке.
                Спасибо за понимание, удачных продаж!
            </p>

            {
                (userDataFromRealtimeDB.name && userDataFromRealtimeDB.surname) ?
                    <AddProduct />:
                    <p className="no-user-data">
                        Вы должны заполнить основную информацию о себе в профиле,
                        для возможности выкладывать товар на площадку.
                        Вы можете сделать это в
                        <Link to={"/userProfile"}>личном кабинете</Link>
                        в разделе "Данные аккаунта".
                    </p>
            }
        </Container>
    );
};

export default PostProductPage;
