import React, {useState} from 'react';
import {Alert, Button, Form, FormControl, Modal} from "react-bootstrap";
import {useGetUser} from "../../../../general-components/Auth/UserProfile/functions/useGetUser";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../../database/firebase-connect";
import {getDate} from "../../../../functions/getDate";

//пожаловаться на юзера
const UserComplaintModal = ({show,onHide,nowUser,userId}) => {

    //стейт для сообщения в форме
    const [message,setMessage] = useState("");

    //ля алерта после отправки формы
    const [res,setRes] = useState({err:false,message:false});

    //user data from realtime database
    const userData = useGetUser(`/users/${nowUser.uid}`);
    // console.log(userData,"user data in UserComplaintModal");

    //отправляем форму в бд
    const handleSend = e => {
        e.preventDefault();

        const dateNow = Date.now();

        //добавляем в базу
        set(ref(realtimeDB, `/forms/complaint/${getDate(dateNow) + '-' + dateNow + '-' + nowUser.uid}`),{
            nowUserId: nowUser.uid,
            nowUserPhone: nowUser.phoneNumber,
            newUserEmail:(userData && userData.email) && userData.email,
            badUserId: userId,
            message: message,
            dateTime: getDate(dateNow),
        })
        .then(() => setRes({err:false,message:"Жалоба успешно зарегестрирована!"}))
        .catch(() => setRes({err:true,message:"Ошибка отправки формы! Попробуйте позже."}))

        setMessage("")
        setTimeout(() => setRes({err:false,message:false}),5000)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Пожаловаться на продавца
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form onSubmit={handleSend}>
                    <Alert className={"w-50 small p-2"}>Ваш телефон: {nowUser.phoneNumber}</Alert>

                    {
                        (userData && userData.email) &&
                        <Alert className={"w-50 small p-2"}>Ваш емаил: {userData.email}</Alert>
                    }

                    <FormControl
                        required
                        as={"textarea"}
                        size={"sm"}
                        placeholder={"Введите сообщение жалобы*"}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />

                    {//aлерт с текстом после отправки формы
                        res.message &&
                        <Alert variant={res.err ? "danger" : "success"} className={"small mt-2 p-2"}>
                            {res.message}
                        </Alert>
                    }

                    <Button className={"my-1"} type={"submit"} size={"sm"}>Отправить</Button>

                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default UserComplaintModal;
