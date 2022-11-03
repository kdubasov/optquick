import React, {useState} from 'react';
import {Badge, Button, Form} from "react-bootstrap";
import {useUserAuth} from "../../../../context/AuthContext";
import {handleSetUserData} from "../functions/handleSetUserData";

const UserDataRedact = ({userData,setRes}) => {

    // console.log(userData, 'userData UserDataRedact')

    //user data state
    const [userDataState,setUserDataState] = useState(userData)

    const { user } = useUserAuth();

    //for getting input for form add user
    const getInput = (input,plc,req) =>{
        return (
            <Form.Control
                size={"sm"}
                placeholder={plc + ' ' + (!userDataState[input] && "(не заполнено)")}
                value={userDataState[input]}
                onChange={e => handleChange(e.target.value,input)}
                required={req}
                className={'my-1'}
            />
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
            .catch(() => setRes({error:"Ошибка, попробуйте позже.",res:false}))

        //delete message
        setTimeout(() => setRes({error:false,res:false}),4000)
    }

    return (
        <div className={'UserDataRedact w-50 my-3 p-3 border'}>
            <Badge>Редактирование данных профиля</Badge>

            <Form onSubmit={handleSend}>
                {getInput('name','Имя',true)}
                {getInput('surname','Фамилия',true)}
                {getInput('age','Возраст',true)}
                {getInput('email','Почта',true)}
                {getInput('vk','Вк',true)}
                {getInput('telegram','Телеграм',false)}
                {getInput('photo','Фото профиля',false)}

                <Button variant={'outline-success'} size={"sm"} type={"submit"} className={'mt-1'}>
                    Подвердить
                </Button>
            </Form>
        </div>
    );
};

export default UserDataRedact;
