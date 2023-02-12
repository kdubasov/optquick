import React, {useState} from 'react';
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import UserPageData from "./components/UserPageData/UserPageData";
import UserPageProducts from "./components/UserPageProducts/UserPageProducts";
import UserReviewsSend from "./components/UserReviews/UserReviewsSend/UserReviewsSend";
import {useUserAuth} from "../../context/AuthContext";
import UserReviewsList from "./components/UserReviews/UserReviewsList/UserReviewsList";
import {Container} from "react-bootstrap";
import UserComplaint from "./components/UserComplaint/UserСomplaint";
import "./UserPage.css";
import UserContacts from "./components/UserContacts/UserContacts";
import UserProfileSEO from "../../seo/UserProfileSEO";

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

            {//SEO
                Boolean(Object.values(userData).length) &&
                <UserProfileSEO data={userData} />
            }

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
                                    <p className={"small warning"}>
                                        Вы не можете оставлять отзыв самому себе.
                                        Также для того чтобы оставить отзыв о продавце или
                                        отправить на него жалобу, вы должны авторизоваться
                                        и заполнить обязательные данные о себе.
                                        Процесс авторизации занимает около 20 секунд вашего времени.
                                        Спасибо за понимание!
                                    </p>
                            }
                        </>
                    }

                    {
                        selectPage === 3 &&
                        <UserContacts userData={userData} />
                    }

                    {/*пожаловаться на продавца*/}
                    {
                        selectPage === 4 &&
                        (
                            (user && nowUserData.email) ?
                                <UserComplaint nowUser={user} userId={userId} userData={nowUserData} />:
                                <p className={"small warning"}>
                                    Для того чтобы оставить отзыв о продавце или
                                    отправить на него жалобу, вы должны авторизоваться
                                    и заполнить обязательные данные о себе.
                                    Процесс авторизации занимает около 20 секунд вашего времени.
                                    Спасибо за понимание!
                                </p>
                        )
                    }
                </div>
            </Container>

        </div>
    );
};

export default UserPage;
