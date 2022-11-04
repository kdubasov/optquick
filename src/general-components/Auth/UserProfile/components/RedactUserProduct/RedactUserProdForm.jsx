import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
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
          <Form.Group className="mb-1">
              <Form.Label className={"m-0"}>{label}</Form.Label>
              <FormControl
                  as={textarea ? "textarea" : "input"}
                  value={arr?prodState[value].join(' '):prodState[value]}
                  onChange={e => handleChange(e.target.value,value,arr)}
              />
          </Form.Group>
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
        <Form onSubmit={handleSend}>

            {getFormGroup("Название","title",false)}
            {getFormGroup("Цена","price",false,false)}
            {getFormGroup("Количество","amount",false,false)}
            {getFormGroup("Минимальный заказ","minOrder",false,false)}
            {getFormGroup("Время доставки","deliveryPeriod",false,false)}

            {getFormGroup("Нахождение товара","location",false,false)}
            {getFormGroup("Описание","description",true,false)}
            {getFormGroup("Характеристики","characteristics",true,false)}

            {getFormGroup("Способ доставки","selectDelivery",false,false)}
            {getFormGroup("Способ оплаты","selectPay",false,false)}

            {getFormGroup("Цвета","colors",false,true)}
            {getFormGroup("Размеры","sizes",false,true)}

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

            <Button type={"submit"} size={"sm"}>Изменить товар</Button>

        </Form>
    );
};

export default RedactUserProdForm;
