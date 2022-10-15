import React, {useState} from 'react';
import {Badge, Button, Form, InputGroup} from "react-bootstrap";
import AddProductSelect from "./AddProductCategSelect";
import AddProductDeliverPaySelects from "./AddProductDeliverPaySelects";

const AddProduct = () => {

    //categories and subcategories value
    const [selectCategory,setSelectCategory] = useState();
    const [selectSubCategory,setSubSelectCategory] = useState();
    const [selectPay,setSelectPay] = useState();
    const [selectDelivery,setSelectDelivery] = useState();

    //form data
    const [dataForm,setFormData] = useState({
        title:'',
        price:'',
        amount:'',
        description:'',
        characteristics:'',
        minOrder:'',
        colors:'',
        location:'',
        sizes:'',
        deliveryPeriod:'',
        photos:[],
        showPhoneNumber:false,
        showEmailAddress:false,
    })

    console.log(dataForm)

    const handleChange = (input,value) => {
        const copy = Object.assign({}, dataForm);
        copy[input] = value;
        setFormData(copy)
    }

    return (
        <div className={`AddProduct w-100 p-1 my-3 border d-flex flex-wrap`}>
            <h4 className={`mt-1 mx-1`}>
                <Badge>Добавление товаров</Badge>
            </h4>

            <Form className={'w-100 mx-1'}>
                <InputGroup className="mb-1 px-1">
                    {/*select for categories*/}
                    <AddProductSelect state={selectCategory} setState={setSelectCategory} text={'категорию'} url={'/categories'} />
                    {//select for subcategories
                        selectCategory &&
                        <AddProductSelect state={selectSubCategory} setState={setSubSelectCategory} text={'подкатегорию'} url={`/categories/${selectCategory}/subcategories`} />
                    }
                </InputGroup>

                <InputGroup className="mb-1 px-1">
                    <InputGroup.Text>Осн. информация*</InputGroup.Text>
                    <Form.Control value={dataForm.title} onChange={e => handleChange('title',e.target.value)} className={'w-50'} placeholder={'Название'} />
                    <Form.Control value={dataForm.price} onChange={e => handleChange('price',e.target.value)} placeholder={'Цена (1шт)'}/>
                    <Form.Control value={dataForm.amount} onChange={e => handleChange('amount',e.target.value)} placeholder={'Кол-во товара'} />
                </InputGroup>

                <InputGroup className="mb-1">
                    <Form.Control className={'mx-1'} value={dataForm.description} onChange={e => handleChange('description',e.target.value)} as="textarea" placeholder={"Описание*"} rows={3} />
                    <Form.Control className={'mx-1'} value={dataForm.characteristics} onChange={e => handleChange('characteristics',e.target.value)} as="textarea" placeholder={"Характеристики (если есть)"} rows={3} />
                </InputGroup>

                <InputGroup className="mb-1 px-1">
                    <AddProductDeliverPaySelects
                        selectPay={selectPay}
                        setSelectPay={setSelectPay}
                        selectDelivery={selectDelivery}
                        setSelectDelivery={setSelectDelivery}
                    />
                    <Form.Control value={dataForm.minOrder} onChange={e => handleChange('minOrder',e.target.value)} placeholder={'Мин. заказ*'} />
                </InputGroup>

                <InputGroup className="mb-2 px-1">
                    <InputGroup.Text>Доп. информация (если есть)</InputGroup.Text>
                    <Form.Control value={dataForm.colors} onChange={e => handleChange('colors',e.target.value)} placeholder={'Цвета (через пробел)'} />
                    <Form.Control value={dataForm.location} onChange={e => handleChange('location',e.target.value)} placeholder={'Место нахождения товара'} />
                    <Form.Control value={dataForm.sizes} onChange={e => handleChange('sizes',e.target.value)} placeholder={'Размеры (через пробел)'} />
                    <Form.Control value={dataForm.deliveryPeriod} onChange={e => handleChange('deliveryPeriod',e.target.value)} placeholder={'Срок доставки (дни)'} />
                </InputGroup>

                <Form.Control type="file" multiple/>

                <InputGroup className="mb-1 px-1">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Показывать телефон"
                        checked={dataForm.showPhoneNumber}
                        onChange={() => handleChange('showPhoneNumber',!dataForm.showPhoneNumber)}
                    />
                    <Form.Check
                        className={'mx-3'}
                        type="switch"
                        id="custom-switch"
                        label="Показывать почту"
                        checked={dataForm.showEmailAddress}
                        onChange={() => handleChange('showEmailAddress',!dataForm.showEmailAddress)}
                    />
                </InputGroup>

                <Button size={"sm"} variant={'outline-success'}>Добавить</Button>
            </Form>
        </div>
    );
};

export default AddProduct;
