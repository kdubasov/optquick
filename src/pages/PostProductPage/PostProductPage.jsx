import React from 'react';
import {Alert, Container} from "react-bootstrap";
import AddProduct from "../../pages-components/AdminPage/Products/AddProducts/AddProduct";
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
                    <Alert>
                        Вы должны заполнить обязательные поля в профиле для того, чтобы выкладывать товар.
                        <br />
                        <button className={"but-green"}>
                            <Link to={'/userProfile'}>Перейти в профиль</Link>
                        </button>
                    </Alert>
            }
        </Container>
    );
};

export default PostProductPage;
