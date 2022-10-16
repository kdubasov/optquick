import React from 'react';
import {Form} from "react-bootstrap";

const AddProductDeliverPaySelects = ({setSelectPay,setSelectDelivery,selectPay,selectDelivery}) => {

    const deliveryArr = ['СДЕК','ПЭК','Почта России','Самовывоз','Деловые линии','Бесплатная доставка','Яндекс.Доставка','Boxberry'];
    const payArr = ['Наличный расчет','Перевод на карту','Безналичный расчет','Другой способ оплаты'];

    return (
        <>
            <Form.Select required onChange={e => setSelectDelivery(e.target.value)} value={selectDelivery}>
                <option hidden>Варианты доставки*</option>
                {
                    deliveryArr.map(elem => (
                        <option key={elem} value={elem}>{elem}</option>
                    ))
                }
            </Form.Select>
            <Form.Select required onChange={e => setSelectPay(e.target.value)} value={selectPay}>
                <option hidden>Варианты оплаты*</option>
                {
                    payArr.map(elem => (
                        <option key={elem} value={elem}>{elem}</option>
                    ))
                }
            </Form.Select>
        </>
    );
};

export default AddProductDeliverPaySelects;
