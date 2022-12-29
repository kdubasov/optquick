import React from 'react';
import {Form} from "react-bootstrap";

const AddProductDeliverPaySelects = ({setSelectPay,setSelectDelivery,selectPay,selectDelivery}) => {

    const deliveryArr = ['СДЕК','ПЭК','Почта России','Самовывоз','Деловые линии','Бесплатная доставка','Яндекс.Доставка','Boxberry'];
    const payArr = ['Наличный расчет','Перевод на карту','Безналичный расчет','Другой способ оплаты'];

    return (
        <div className={"inner"}>

            <div className={"inp-inner"}>
                <label>Выберите наиболее удобный вам вариант доставки товара</label>
                <Form.Select
                    onChange={e => setSelectDelivery(e.target.value)}
                    value={selectDelivery}
                    size={"sm"}
                >
                    <option hidden value={""}>Варианты доставки*</option>
                    {
                        deliveryArr.map(elem => (
                            <option key={elem} value={elem}>{elem}</option>
                        ))
                    }
                </Form.Select>
            </div>

            <div className={"inp-inner"}>
                <label>Выберите наиболее удобный вам вариант оплаты товара</label>
                <Form.Select
                    onChange={e => setSelectPay(e.target.value)}
                    value={selectPay}
                    size={"sm"}
                >
                    <option hidden value={""}>Варианты оплаты</option>
                    {
                        payArr.map(elem => (
                            <option key={elem} value={elem}>{elem}</option>
                        ))
                    }
                </Form.Select>
            </div>
        </div>
    );
};

export default AddProductDeliverPaySelects;
