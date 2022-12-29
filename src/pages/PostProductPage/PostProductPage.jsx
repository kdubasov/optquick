import React from 'react';
import {Container} from "react-bootstrap";
import AddProduct from "./AddProducts/AddProduct";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import {useUserAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import "./PostProductPage.css";

const PostProductPage = () => {

    //context user data
    const { user } = useUserAuth();

    const userDataFromRealtimeDB = useGetUser(`/users/${user.uid}`);
    // console.log(userDataFromRealtimeDB,'UserDataAdded');

    return (
        <Container className={'PostProductPage'}>
            <h3 className={"title"}>
                Разместить объявление
            </h3>

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
