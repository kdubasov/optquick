import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {handleAddUserData} from "../../functions/handleAddUserData";
import "./AddUserData.css";
import {getDate} from "../../../../../functions/getDate";

const AddUserData = ({setRes,user}) => {

    // console.log(user)

    //data from form
    const [dataForm,setDataForm] = useState({
        id: user.uid,
        phoneNumber: user.phoneNumber,
        name: '',
        surname: '',
        vk: '',
        telegram: '',
        age: '',
        email: '',
        photo: '',
        dateRegistr: user['metadata'] ? user['metadata']['creationTime'] : getDate(Date.now()),
    });
    // console.log(dataForm,'Data from form add user')

    //change state input
    const handleChange = (value,input) =>{
        const copy = Object.assign({}, dataForm)
        copy[input] = value;
        setDataForm(copy)
    }

    //for get input for form add user
    const getInput = (input,plc,req) =>{
        return (
            <div className={"input-container"}>
                <label className={"small"}>{plc}</label>
                <Form.Control
                    size={"sm"}
                    placeholder={!dataForm[input] ? "Не заполнено" : ""}
                    value={dataForm[input]}
                    onChange={e => handleChange(e.target.value,input)}
                    required={req}
                />
            </div>
        )
    }

    //send form
    const handleSend = e =>{
        //add user data in database
        handleAddUserData(e,dataForm,`/users/${user.uid}`)
            .then(() => setRes({error:false,res:"Данные профиля успешно отредактированы."}))
            .catch(() => setRes({error:"Ошибка редактирования профиля, попробуйте позже.",res:false}))

        //delete message
        setTimeout(() => setRes({error:false,res:false}),5000)
        //clear form data
        setDataForm({name: '', surname: '', vk: '', telegram: '', age: '', email: '', photo: '',})
    }

    return (
        <div className={`AddUserData UserDataRedact`}>

            <h5>
                Добавьте информацию о себе,
                для возможности разм. объявления.
            </h5>

            <p className={"small"}>
                Если вы заполните все поля, то в вашем товаре появится табличка "Подтвержденный продавец"
            </p>

            <Form onSubmit={e => handleSend(e)}>
                <div className={"inner"}>
                    <h5 className={"mt-0"}>Контактные данные</h5>

                    {getInput('name','Имя*',true)}
                    {getInput('surname','Фамилия*',true)}
                    {getInput('email','Эл. почта*',true)}
                    <div className={"input-container"}>
                        <label className={"small"}>Номер телефона</label>
                        <Form.Control
                            size={"sm"}
                            value={user?.phoneNumber + " (Нельзя поменять)"}
                            disabled
                        />
                    </div>
                </div>

                <div className={"inner"}>
                    <h5>Социальные сети</h5>
                    {getInput('vk','Ссылка на ВК (Вконтакте)',false)}
                    {getInput('telegram','Ссылка на Телеграм',false)}
                </div>

                <div className={"inner"}>
                    <h5>Дополнительно</h5>
                    {getInput('age','Возраст (в годах)*',true)}
                    {getInput('photo','Фото профиля (ссылка)',false)}
                </div>

                <button type={"submit"} className={"but-green px-5"}>
                    Отправить
                </button>
            </Form>
        </div>
    );
};

export default AddUserData;
