import React, {useState} from 'react';
import {Form, FormControl} from "react-bootstrap";
import {handleRedactProducts} from "../../../../../pages-functions/AdminPage/AddProducts/handleRedactProducts";

const RedactUserProdForm = ({data,setRes}) => {

    const [prodState,setProdState] = useState(data);
    // console.log(prodState,"prod state in RedactUserProdForm");

    //change for input and state
    const handleChange = (nowValue,stateValue,arr) =>{
        const copy = Object.assign({},prodState);
        //для записи значений в массив
        if (arr && (stateValue === "sizes" || stateValue === "colors")){
            copy[stateValue] = nowValue.split(" ");
        }else {
            copy[stateValue] = nowValue;
        }
        setProdState(copy);
    }

    //get input for form with label
    const getFormGroup = (label,value,textarea,arr) => {
      return (
          <div className={"for-one-inp"}>
              <Form.Label className={"m-0"}>{label}</Form.Label>
              <FormControl
                  as={textarea ? "textarea" : "input"}
                  value={arr?prodState[value].join(' '):prodState[value]}
                  onChange={e => handleChange(e.target.value,value,arr)}
              />
          </div>
      )
    }

    const handleSend = e => {
        e.preventDefault()
        handleRedactProducts(e,prodState)
            .then(() => setRes({error:false,res:"Данные товара успешно отредактированы."}))
            .catch(() => setRes({error:"Ошибка редактирования товара, попробуйте позже.",res:false}))

        setTimeout(() => setRes({error:false,res:false}),4000);
    }

    return (
        <Form className={"RedactUserProdForm AddProduct"} onSubmit={handleSend}>

            <div className="inp-group">
                <h4>Основная информация</h4>
                {getFormGroup("Название","title",false)}
                {getFormGroup("Цена","price",false,false)}
                {getFormGroup("Количество","amount",false,false)}
            </div>

            <div className="inp-group">
                <h4>Описание и характеристики</h4>
                {getFormGroup("Описание","description",true,false)}
                {getFormGroup("Характеристики","characteristics",true,false)}
            </div>

            <div className="inp-group">
                <h4>Доставка и заказ</h4>
                {getFormGroup("Минимальный заказ","minOrder",false,false)}
                {getFormGroup("Нахождение товара","location",false,false)}
            </div>

            <div className="inp-group">
                {getFormGroup("Время доставки","deliveryPeriod",false,false)}
                {getFormGroup("Способ доставки","selectDelivery",false,false)}
                {getFormGroup("Способ оплаты","selectPay",false,false)}
            </div>

            <div className="inp-group">
                {getFormGroup("Цвета","colors",false,true)}
                {getFormGroup("Размеры","sizes",false,true)}
            </div>


            <div className="checks-container">
                <Form.Check
                    type="switch"
                    label="Показывать телефон"
                    checked={prodState.showPhoneNumber}
                    onChange={() => handleChange(!prodState.showPhoneNumber,"showPhoneNumber",false)}
                />

                <Form.Check
                    className={"mx-4"}
                    type="switch"
                    label="Показывать почту"
                    checked={prodState.showEmailAddress}
                    onChange={() => handleChange(!prodState.showEmailAddress,"showEmailAddress",false)}
                />
            </div>

            <button className={"but-green px-5"} type={"submit"}>
                Изменить товар
            </button>

        </Form>
    );
};

export default RedactUserProdForm;
