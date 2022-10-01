import React from 'react';
import {Badge, Button, Form, InputGroup} from "react-bootstrap";

const AddProduct = () => {
    return (
        <div className={`AddProduct w-100 p-1 border d-flex flex-wrap`}>
            <h4 className={`mt-1 mx-1`}>
                <Badge>Добавление товаров</Badge>
            </h4>

            <Form className={'w-100 mx-1'}>
                <InputGroup className="mb-1 px-1">
                    <Form.Select aria-label="Default select example">
                        <option>Выберите категорию</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Выберите подкатегорию</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-1 px-1">
                    <InputGroup.Text>Осн. информация*</InputGroup.Text>
                    <Form.Control className={'w-50'} placeholder={'Название'} />
                    <Form.Control placeholder={'Цена (1шт)'}/>
                    <Form.Control placeholder={'Кол-во товара'} />
                </InputGroup>

                <InputGroup className="mb-1">
                    <Form.Control className={'mx-1'} as="textarea" placeholder={"Описание*"} rows={3} />
                    <Form.Control className={'mx-1'} as="textarea" placeholder={"Характеристики (если есть)"} rows={3} />
                </InputGroup>

                <InputGroup className="mb-2 px-1">
                    <InputGroup.Text>Доп. информация (если есть)</InputGroup.Text>
                    <Form.Control placeholder={'Цвета'} />
                    <Form.Control placeholder={'Размеры'} />
                    <Form.Control placeholder={'Способы доставки'} />
                    <Form.Control placeholder={'Мин. заказ'} />
                </InputGroup>

                <InputGroup className="mb-1 px-1">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Показывать телефон"
                        checked={true}
                    />
                    <Form.Check
                        className={'mx-3'}
                        type="switch"
                        id="custom-switch"
                        label="Показывать почту"
                    />
                </InputGroup>
                <Button variant={'outline-success'}>Добавить</Button>
            </Form>
        </div>
    );
};

export default AddProduct;
