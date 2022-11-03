import React, {useState} from 'react';
import {Alert, Badge, Button, Form, InputGroup} from "react-bootstrap";
import {handleAddUserData} from "../functions/handleAddUserData";

const AddUserData = ({setRes,user}) => {

    console.log(user)

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
        dateRegistr:user['metadata']?user['metadata']['creationTime'] : 'Нет данных',
    });
    // console.log(dataForm,'Data from form add user')

    //change state input
    const handleChange = (value,input) =>{
        const copy = Object.assign({}, dataForm)
        copy[input] = value;
        setDataForm(copy)
    }

    //for getting input for form add user
    const getInput = (input,plc,req) =>{
        return (
            <Form.Control
                size={"sm"}
                placeholder={plc}
                value={dataForm[input]}
                onChange={e => handleChange(e.target.value,input)}
                required={req}
            />
        )
    }

    const handleSend = e =>{
        handleAddUserData(e,dataForm,`/users/${user.uid}`)
            .then(() => setRes({error:false,res:"Данные профиля успешно отредактированы."}))
            .catch(() => setRes({error:"Ошибка редактирования профиля, попробуйте позже.",res:false}))

        //delete message
        setTimeout(() => setRes({error:false,res:false}),4000)

        setDataForm({name: '', surname: '', vk: '', telegram: '', age: '', email: '', photo: '',})
    }

    return (
        <div className={`AddUserData p-3 border w-50 mt-3 mx-3`}>

            <Badge className={'w-100'}>
                Добавьте информацию о себе,
                для возможности разм. объявления.
            </Badge>

            <Alert className={'my-2 small p-2'}>
                Если вы заполните все поля, то в вашем товаре появится табличка "Подтвержденный партнер"
            </Alert>

            <Form onSubmit={e => handleSend(e)}>
                <InputGroup size={"sm"} className="mb-1">
                    <InputGroup.Text>Имя и фамилия*</InputGroup.Text>
                    {getInput('name','Имя',true)}
                    {getInput('surname','Фамилия',true)}
                </InputGroup>

                <InputGroup size={"sm"} className="mb-1">
                    <InputGroup.Text>Соц. сети</InputGroup.Text>
                    {getInput('vk','VK',false)}
                    {getInput('telegram','Telegram',false)}
                </InputGroup>

                <InputGroup size={"sm"} className="mb-1">
                    {getInput('age','Возраст*',true)}
                    {getInput('email','Эл. почта*',true)}
                </InputGroup>

                {getInput('photo','Фото профиля (ссылка)',false)}

                <Button type={"submit"} variant={'outline-success'} size={"sm"} className={'mt-2 w-100'}>
                    Отправить
                </Button>
            </Form>
        </div>
    );
};

export default AddUserData;
