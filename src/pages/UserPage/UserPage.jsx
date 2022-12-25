import React, {useState} from 'react';
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import UserPageData from "./components/UserPageData/UserPageData";
import UserPageProducts from "./components/UserPageProducts/UserPageProducts";
import UserReviewsSend from "./components/UserReviews/UserReviewsSend/UserReviewsSend";
import {useUserAuth} from "../../context/AuthContext";
import UserReviewsList from "./components/UserReviews/UserReviewsList/UserReviewsList";
import {Alert, Container} from "react-bootstrap";
import UserComplaint from "./components/UserReviews/UserСomplaint";
import "./UserPage.css";

const UserPage = () => {

    const { user } = useUserAuth();

    const userId = getPathLastWord(window.location.pathname);
    //данные того на чьем мы профиле
    const userData = useGetUser(`/users/${userId}`);
    //данные авторизирпованного пользователя
    const nowUserData = useGetUser(`/users/${user?.uid}`);

    //для отображения выбранной страницы
    const [selectPage, setSelectPage] = useState(1);

    return (
        <div className={`UserPage`}>

            {/*самая верхняя картинка bg*/}
            <div className="top-image" />

            <Container>
                <div className="left">
                    <UserPageData
                        data={userData}
                        selectPage={selectPage}
                        setSelectPage={setSelectPage}
                    />
                </div>


                <div className="right">

                    {
                        selectPage === 1 &&
                        <UserPageProducts userId={userId} />
                    }

                    {
                        selectPage === 2 &&
                        <>
                            {/*отзывы*/}
                            <UserReviewsList userId={userId} />
                            {//делаем так чтобы пользователь не мог сам себе написать отзыв
                                (user && (user.uid !== userId) && nowUserData.email) ?
                                    <UserReviewsSend userId={userId} nowUser={user} />:
                                    <Alert className={"small"}>
                                        Вы не можете оставлять отзыв самому себе.
                                        Также для того чтобы оставить отзыв о продавце или
                                        отправить на него жалобу, вы должны авторизоваться
                                        и заполнить обязательные данные о себе.
                                    </Alert>
                            }
                        </>
                    }

                    {/*пожаловаться на продавца*/}
                    {
                        selectPage === 4 &&
                        (
                            (user && nowUserData.email) ?
                                <UserComplaint nowUser={user} userId={userId} userData={nowUserData} />:
                                <Alert className={"small"}>
                                    Для того чтобы оставить отзыв о продавце или
                                    отправить на него жалобу, вы должны авторизоваться
                                    и заполнить обязательные данные о себе.
                                </Alert>
                        )
                    }
                </div>
            </Container>

        </div>
    );
};

export default UserPage;
