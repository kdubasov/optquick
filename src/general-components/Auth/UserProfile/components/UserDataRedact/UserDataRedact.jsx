import React, {useState} from 'react';
import {Alert, Form} from "react-bootstrap";
import {useUserAuth} from "../../../../../context/AuthContext";
import {handleSetUserData} from "../../functions/handleSetUserData";

//css
import "./UserDataRedact.css";
import "./UserDataRedactMedia.css";

const UserDataRedact = ({userData,setRes}) => {

    // console.log(userData, 'userData UserDataRedact');

    //user data state
    const [userDataState,setUserDataState] = useState(userData);

    //user data context
    const { user } = useUserAuth();

    //for getting input for form add user
    const getInput = (input,plc,req) =>{
        return (
            <div className={"input-container"}>
                <label className={"small"}>{plc}</label>
                <Form.Control
                    size={"sm"}
                    placeholder={!userDataState[input] ? "Не заполнено" : ""}
                    value={userDataState[input]}
                    onChange={e => handleChange(e.target.value,input)}
                    required={req}
                />
            </div>
        )
    }

    //change state input
    const handleChange = (value,input) =>{
        const copy = Object.assign({}, userDataState)
        copy[input] = value;
        setUserDataState(copy)
    }

    //send res for redact user profile data
    const handleSend = e =>{
        e.preventDefault()
        handleSetUserData(user.uid,userDataState)
            .then(() => setRes({error:false,res:"Данные профиля успешно обновлены."}))
            .catch(() => setRes({error:true,res:"Ошибка, попробуйте позже."}))

        //delete message
        setTimeout(() => setRes({error:false,res:false}),5000)
    }

    return (
        <div className={'UserDataRedact'}>

            {
                (userData.telegram && userData.vk && userData.photo) ?
                    <Alert variant={"success small"}>
                        Вы заполнили все данные профиля, удачных покупок и продаж!
                    </Alert>:
                    <Alert variant={"danger small"}>
                        Вы не заполнили все данные профиля, пожалуйста, заполните оставшиеся!
                    </Alert>
            }

            <h4>Редактировать данные профиля</h4>

            <Form onSubmit={handleSend}>
                <div className="inner">
                    <h5 className={"mt-0"}>Контактные данные</h5>
                    {getInput('name','Ваше имя',true)}
                    {getInput('surname','Ваша фамилия',true)}
                    {getInput('email','Электронная почта',true)}
                    <div className={"input-container"}>
                        <label className={"small"}>Номер телефона</label>
                        <Form.Control
                            size={"sm"}
                            value={user?.phoneNumber + " (Нельзя поменять)"}
                            disabled
                        />
                    </div>
                </div>

                <div className="inner">
                    <h5>Социальные сети</h5>
                    {getInput('vk','Ссылка на ВК (Вконтакте)',true)}
                    {getInput('telegram','Ссылка на Телеграм',false)}
                </div>

                <div className="inner">
                    <h5>Дополнительно</h5>
                    {getInput('age','Возраст (в годах)',true)}
                    {getInput('photo','Фото профиля (ссылка)',false)}
                </div>

                <button type={"submit"} className={'but-green'}>
                    Сохранить изменения
                </button>
            </Form>
        </div>
    );
};

export default UserDataRedact;
