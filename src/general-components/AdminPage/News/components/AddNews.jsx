import React,{useState} from 'react';
import {Alert, Form, FormControl} from "react-bootstrap";
import {handleAddCategory} from "../../../../pages-functions/AdminPage/News/handleAddNews";

const AddNews = () => {

    //alert data
    const [alertData, setAlertData] = useState({
        show:false,
        text:"",
        variant:"",
    });

    //стейт для формы
    const [formData, setFormData] = useState({
        link:"",
        title:"",
        openingText:"",
        innerText:"",
        cardPhoto:"",
        cardBG:"",
        innerPhoto:"",
    });

    //смена данных для формы в стейте
    const handleChangeForm = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    //получаем инпут
    const getInput = (plc,stateValue) => {
        return(
            <FormControl
                className={"mb-1"}
                required={true}
                size={"sm"}
                placeholder={plc}
                value={formData[stateValue]}
                onChange={e => handleChangeForm(stateValue,e.target.value)}
            />
        )
    }

    const handleSend = e => {
        e.preventDefault()

        //add data in database
        handleAddCategory(formData)
            .then(() => setAlertData({show:true, text:"Статья добавлена", variant:"success"}))
            .catch(() => setAlertData({show:true, text:"Ошибка добавления!", variant:"danger"}))
        setFormData({
            link:"",
            title:"",
            openingText:"",
            innerText:"",
            cardPhoto:"",
            cardBG:"",
            innerPhoto:"",
        })
        setTimeout(() => setAlertData({show:false, text:"", variant:"",}),5000)
    }

    return (
        <div className={"AddNews m-2 p-2 border"}>
            <h5>Добавить статью</h5>

            <Form onSubmit={handleSend}>
                {getInput("Ссылка","link")}
                {getInput("называние","title")}
                {getInput("вступительный текст","openingText")}

                <FormControl
                    rows={5}
                    className={"mb-1"}
                    value={formData.innerText}
                    onChange={e => handleChangeForm("innerText",e.target.value)}
                    as={"textarea"}
                    size={"sm"}
                    placeholder={"внутренний текст"}
                />

                {getInput("Фото для карточки (ссылка)","cardPhoto")}
                {getInput("Цвет для карточки (#000000)","cardBG")}
                {getInput("Внутреннее фото (ссылка)","innerPhoto")}

                <button className={"but-green"} type={"submit"}>Добавить</button>
            </Form>

            {
                alertData.show &&
                <Alert className={"my-2 small"} variant={alertData.variant}>
                    {alertData.text}
                </Alert>
            }
        </div>
    );
};

export default AddNews;
