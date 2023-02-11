import React from 'react';
import {Nav} from "react-bootstrap";
import {useUserAuth} from "../../../../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {getReviewsGrade} from "../../../../../functions/getReviewsGrade";

//css
import "./UserDataNavigate.css";
import "./UserDataNavigateMedia.css";

const UserDataNavigate = ({data,selectPage,setSelectPage}) => {

    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    //logout function
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="UserDataNavigate">
            
            <div className="user">
                <div className="avatar">
                    {
                        data?.photo ?
                            <img src={data.photo} alt={data.name} />:
                            <img src="/images/auth/noAvatar.svg" alt="add"/>
                    }
                    {
                        !data?.photo &&
                        <img
                            src="/images/auth/redact-photo.svg"
                            alt="redact"
                            className={"redact"}
                            onClick={() => setSelectPage(3)}
                        />
                    }
                </div>

                <div>
                    <h5 className={"name"}>
                        {
                            (data?.name && data?.surname) ?
                                data.surname + " " + data.name:
                                <span className={"add"} onClick={() => setSelectPage(3)}>
                            Добавить имя
                        </span>
                        }
                        {
                            (data?.vk && data?.telegram && data?.photo) &&
                            <img src="/images/icons/user-success.svg" alt=""/>
                        }
                    </h5>

                    {
                        data?.reviews ?
                            <p className="reviews" onClick={() => setSelectPage(2)}>
                                {getReviewsGrade(data.reviews)}
                                <img src="/images/auth/star.svg" alt="star"/>
                                <span>
                            {Object.values(data.reviews).length + " отзыва"}
                        </span>
                            </p>:
                            <p className="reviews">Отзывов нет</p>
                    }
                </div>
            </div>

            <Nav>
                <button
                    onClick={() => setSelectPage(1)}
                    disabled={selectPage === 1}
                >
                    <img src="/images/auth/prods.svg" alt="my products"/>
                    Мои объявления
                </button>

                <button
                    onClick={() => setSelectPage(2)}
                    disabled={selectPage === 2}
                >
                    <img src="/images/auth/star-border.svg" alt="my otzivi"/>
                    Мои отзывы
                </button>

                <Link to={"/briefcase"}>
                    <button>
                        <img src="/images/icons/like-border.svg" alt="my favorites"/>
                        Избранное
                    </button>
                </Link>

                <div className="line" />

                <button
                    onClick={() => setSelectPage(3)}
                    disabled={selectPage === 3}
                >
                    <img src="/images/auth/settings.svg" alt="settings"/>
                    Данные аккаунта
                </button>

                <button className={"red"} onClick={handleLogout}>
                    <img src="/images/auth/logout.svg" alt="logout"/>
                    Выйти
                </button>
            </Nav>
        </div>
    );
};

export default UserDataNavigate;
