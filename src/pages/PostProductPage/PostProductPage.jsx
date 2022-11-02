import React from 'react';
import {Alert, Badge} from "react-bootstrap";
import AddProduct from "../../pages-components/AdminPage/Products/AddProducts/AddProduct";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import {useUserAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";

const PostProductPage = () => {

    //context user data
    const { user } = useUserAuth();

    const userDataFromRealtimeDB = useGetUser(`/users/${user.uid}`);
    console.log(userDataFromRealtimeDB,'UserDataAdded')

    return (
        <div className={'PostProductPage container py-3'}>
            <h4><Badge>Разместить объявление</Badge></h4>

            {
                Object.values(userDataFromRealtimeDB).length ?
                    <AddProduct />:
                    <Alert className={'w-50 p-2 small'}>
                        Вы должны заполнить обязательные поля в профиле для того, чтобы выкладывать товар.
                        <br />
                        <Link to={'/userProfile'}>Перейти в профиль</Link>
                    </Alert>
            }
        </div>
    );
};

export default PostProductPage;
