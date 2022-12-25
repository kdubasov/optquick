import React, {useState} from 'react';
import {Alert, Form, FormControl} from "react-bootstrap";
import {useGetUser} from "../../../../../general-components/Auth/UserProfile/functions/useGetUser";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../../../database/firebase-connect";
import {getDate} from "../../../../../functions/getDate";
import "./UserReviewsSend.css";

const UserReviewsSend = ({userId,nowUser}) => {

    //user data from realtime database
    const nowUserData = useGetUser(`/users/${nowUser.uid}`);
    // console.log(nowUserData,"user data in UserReviewsSend");

    //стейты для формы с отзывами
    const [message,setMessage] = useState("");
    const [grade,setGrade] = useState("");

    //для алерта после отправки формы
    const [res,setRes] = useState({err:false,message:false});

    //отправляем форму в бд
    const handleSendReview = e => {
        e.preventDefault();

        const dateNow = Date.now();
        const reviewId = dateNow + '-' + nowUser.uid;

        //добавляем в базу
        set(ref(realtimeDB, `/users/${userId}/reviews/${reviewId}`),{
            id:reviewId,
            userReviewId: userId,
            userSendId: nowUser.uid,
            userSendName: nowUserData.name,
            userSendSurname: nowUserData.surname,
            dateTime: getDate(dateNow),
            message: message,
            grade:Number(grade),
        })
            .then(() => setRes({err:false,message:"Отзыв успешно сохранен!"}))
            .catch(() => setRes({err:true,message:"Ошибка отправки отзыва! Попробуйте позже."}))

        setGrade("")
        setMessage("")
        setTimeout(() => setRes({err:false,message:false}),5000)
    }

    return (
        <div className={"UserReviewsSend"}>

            <h5>Оставить отзыв о продавце</h5>

            <Form onSubmit={handleSendReview}>

                <label className={"small"}>
                    Выберите оценку от 1 до 5
                </label>
                <FormControl
                    required
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                    type={"number"}
                    size={"sm"}
                    min={1}
                    max={5}
                    placeholder={"Обязательно к заполнению"}
                />

                <label className={"small"}>
                    Опишите ваши впечатления от продавца
                </label>
                <FormControl
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    size={"sm"}
                    as={"textarea"}
                    placeholder={"Обязательно к заполнению"}
                />

                {//aлерт с текстом после отправки формы
                    res.message &&
                    <Alert variant={res.err ? "danger" : "success"} className={"small my-2 p-2"}>
                        {res.message}
                    </Alert>
                }

                <button className={"but-blue px-5"} type={"submit"}>Отправить</button>
            </Form>

        </div>
    );
};

export default UserReviewsSend;
