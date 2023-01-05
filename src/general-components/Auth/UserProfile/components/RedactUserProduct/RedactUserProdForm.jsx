import React, {useState} from 'react';
import {Form, FormControl} from "react-bootstrap";
import {handleRedactProducts} from "../../../../../pages-functions/AdminPage/AddProducts/handleRedactProducts";

const RedactUserProdForm = ({data,setRes}) => {

    const [prodState,setProdState] = useState(data);
    console.log(prodState,"prod state in RedactUserProdForm");

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
    const getFormGroup = (label,value,textarea,arr,req) => {
      return (
          <div className={"for-one-inp"}>
              <Form.Label className={"m-0"}>{label}</Form.Label>
              <FormControl
                  required={req}
                  placeholder={req ? "Обязательно к заполнению" : ""}
                  as={textarea ? "textarea" : "input"}
                  value={arr ? prodState[value].join(' ') : prodState[value]}
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
                <h5>Основная информация</h5>
                {getFormGroup("Название товара","title",false,false,true)}
                {getFormGroup("Цена товара (за 1шт)","price",false,false,true)}
                {getFormGroup("Количество товара","amount",false,false,true)}
            </div>

            <div className="inp-group">
                <h5>Описание товара и характеристики</h5>
                {getFormGroup("Описание","description",true,false,true)}
                {getFormGroup("Характеристики","characteristics",true,false,false)}
            </div>

            <div className="inp-group">
                <h5>Доставка и оплата</h5>
                {getFormGroup("Минимальный заказ","minOrder",false,false,true)}
                {getFormGroup("Способ доставки","selectDelivery",false,false,false)}
                {getFormGroup("Способ оплаты","selectPay",false,false,false)}
            </div>

            <div className="inp-group">
                <h5>Дополнительная информация</h5>
                {getFormGroup("Время доставки","deliveryPeriod",false,false,false)}
                {getFormGroup("Цвета","colors",false,true,false)}
                {getFormGroup("Размеры","sizes",false,true,false)}
                {getFormGroup("Нахождение товара","location",false,false,false)}
            </div>

            <div className="checks-container">
                <Form.Check
                    type="switch"
                    label="Показывать телефон"
                    checked={prodState.showPhoneNumber}
                    onChange={() => handleChange(!prodState.showPhoneNumber,"showPhoneNumber",false)}
                />

                <Form.Check
                    type="switch"
                    label="Показывать почту"
                    checked={prodState.showEmailAddress}
                    onChange={() => handleChange(!prodState.showEmailAddress,"showEmailAddress",false)}
                />
            </div>

            <button className={"but-green px-5"} type={"submit"}>
                Применить изменения
            </button>

        </Form>
    );
};

export default RedactUserProdForm;
