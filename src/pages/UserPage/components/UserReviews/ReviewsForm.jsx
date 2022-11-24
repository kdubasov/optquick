import React,{useState} from 'react';
import {Alert, Badge, Button, Form, FormControl} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../../database/firebase-connect";
import {getDate} from "../../../../functions/getDate";

//орма для отправки отзывов пользавотелю
const ReviewsForm = ({nowUser,nowUserData,userId}) => {

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
        <Form onSubmit={handleSendReview} className={"w-50 border p-2 my-2"}>
            <Badge bg={"success"} className={"mb-1"}>Оставить отзыв о продавце</Badge>
            <FormControl
                required
                value={grade}
                onChange={e => setGrade(e.target.value)}
                placeholder={"Оценка (от 1 до 5)"}
                type={"number"}
                size={"sm"}
                className={"w-50 my-1"}
                min={1}
                max={5}
            />

            <FormControl
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                size={"sm"}
                as={"textarea"}
                placeholder={"Напишите ваш отзыв"}
                rows={3}
            />

            {//aлерт с текстом после отправки формы
                res.message &&
                <Alert variant={res.err ? "danger" : "success"} className={"small mt-2 p-2"}>
                    {res.message}
                </Alert>
            }

            <Button size={"sm"} className={"my-1"} type={"submit"}>Отправить</Button>
        </Form>
    );
};

export default ReviewsForm;
