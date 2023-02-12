import React, {useState} from 'react';
import {Alert, Form, FormControl} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../../database/firebase-connect";
import {getDate} from "../../../../functions/getDate";

//css
import "./UserComplaint.css";
import "./UserComplaintMedia.css";

//пожаловаться на юзера
const UserComplaint = ({nowUser,userId,userData}) => {

    //стейт для сообщения в форме
    const [message,setMessage] = useState("");

    //ля алерта после отправки формы
    const [res,setRes] = useState({err:false,message:false});

    //отправляем форму в бд
    const handleSend = e => {
        e.preventDefault();

        const dateNow = Date.now();
        const id = dateNow + '-' + userId + '-' + nowUser.uid;

        //добавляем в базу
        set(ref(realtimeDB, `/forms/complaint/${id}`),{
            id:id,
            nowUserId: nowUser.uid,
            nowUserPhone: nowUser.phoneNumber,
            nowUserEmail:(userData && userData.email) && userData.email,
            badUserId: userId,
            message: message,
            dateTime: getDate(dateNow),
        })
        .then(() => setRes({err:false,message:"Жалоба успешно зарегестрирована!"}))
        .catch(() => setRes({err:true,message:"Ошибка отправки формы! Попробуйте позже."}))

        setMessage("")
        setTimeout(() => setRes({err:false,message:false}),5000)
    }

    //проверяем не авторизованного юзера
    if (nowUser.uid === userId){
        return (
            <Alert className={"small"}>
                Вы не можете жаловаться сами на себя.
            </Alert>
        )
    }

    return (
        <div className={"UserComplaint"}>
            <h4>Пожаловаться на продавца</h4>

            <Form onSubmit={handleSend}>

                <p className={"small"}>
                    Подробнее опишите вашу проблему с данным продавцом,
                    мы постараемся принять меры как можно быстрее.
                    Спасибо, что помогаете сделать наш сервис лучше!
                </p>

                <label>
                    Введите текст жалобы
                </label>

                <FormControl
                    required
                    as={"textarea"}
                    size={"sm"}
                    placeholder={"Обязательно к заполнению"}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />

                {//aлерт с текстом после отправки формы
                    res.message &&
                    <Alert variant={res.err ? "danger" : "success"} className={"small mb-4 p-2"}>
                        {res.message}
                    </Alert>
                }

                <button type={"submit"} className={"but-blue px-5"}>
                    Отправить жалобу
                </button>

            </Form>
        </div>
    );
};

export default UserComplaint;
