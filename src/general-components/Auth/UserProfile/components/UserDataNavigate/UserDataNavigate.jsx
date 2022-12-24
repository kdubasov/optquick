import React from 'react';
import {Nav} from "react-bootstrap";
import {useUserAuth} from "../../../../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import "./UserDataNavigate.css";
import {getReviewsGrade} from "../../../../../functions/getReviewsGrade";

const UserDataNavigate = ({data}) => {

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
                    />
                }
            </div>

            <h5 className={"name"}>
                {
                    (data?.name && data?.surname) ?
                        data.surname + " " + data.name:
                        "Имя не добавлено"
                }
                {
                    (data?.vk && data?.telegram && data?.photo) &&
                    <img src="/images/icons/user-success.svg" alt=""/>
                }
            </h5>

            {
                data?.reviews ?
                    <p className="reviews">
                        {getReviewsGrade(data.reviews)}
                        <img src="/images/auth/star.svg" alt="star"/>
                        <span>
                            {Object.values(data.reviews).length + " отзыва"}
                        </span>
                    </p>:
                    <p className="reviews">Отзывов нет</p>
            }

            <Nav>
                <button>
                    <img src="/images/auth/prods.svg" alt="my products"/>
                    Мои объявления
                </button>
                <button>
                    <img src="/images/auth/star-border.svg" alt="my otzivi"/>
                    Мои отзывы
                </button>
                <button>
                    <img src="/images/icons/like-border.svg" alt="my favorites"/>
                    Избранное
                </button>

                <div className="line" />

                <button>
                    <img src="/images/auth/settings.svg" alt="settings"/>
                    Настройки
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