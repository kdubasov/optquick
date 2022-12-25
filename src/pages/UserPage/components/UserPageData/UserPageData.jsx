import React from 'react';
import {Nav} from "react-bootstrap";
import {getReviewsGrade} from "../../../../functions/getReviewsGrade";
import "./UserPageData.css";

const UserPageData = ({data,selectPage,setSelectPage}) => {

    //смотрим все ли данные профиля заполнены (для вывода таблички)
    const checkUserData = () => {
        for (let value in Object.values(data)) {
            if(!Boolean(Object.values(data)[value])){
                return false;
            }
        }
        return true;
    }

    return (
        <div className={"UserPageData UserDataNavigate"}>

            {/*user photo*/}
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
                        <span className={"add"}>
                            Добавить имя
                        </span>
                }
                {
                    checkUserData() &&
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

            <p className={"date small"}>
                <strong>Дата регистрации:</strong><br />
                <span>{data.dateRegistr}</span>
            </p>

            <Nav>
                <button
                    disabled={selectPage === 1}
                    onClick={() => setSelectPage(1)}
                >
                    <img src="/images/auth/prods.svg" alt="my products"/>
                    Объявления продавца
                </button>

                <button
                    disabled={selectPage === 2}
                    onClick={() => setSelectPage(2)}
                >
                    <img src="/images/auth/star-border.svg" alt="my otzivi"/>
                    Отзывы продавца
                </button>

                <button
                    disabled={selectPage === 3}
                    onClick={() => setSelectPage(3)}
                >
                    <img src="/images/icons/message.svg" alt="message"/>
                    Связаться с продавцом
                </button>

                <div className="line" />

                <button
                    className={"red"}
                    disabled={selectPage === 4}
                    onClick={() => setSelectPage(4)}
                >
                    <img src="/images/icons/danger.svg" alt="logout"/>
                    Пожаловаться
                </button>
            </Nav>

        </div>
    );
};

export default UserPageData;
