import React, {useState} from 'react';
import {Alert, Form} from "react-bootstrap";
import AddProductSelect from "./AddProductsSelect";
import {useUserAuth} from "../../../context/AuthContext";
import {handleAddProducts} from "../../../pages-functions/AdminPage/AddProducts/handleAddProducts";
import "./AddProduct.css";
import AddProductDeliverPaySelects from "./AddProductDeliverPaySelects";
import {Link} from "react-router-dom";

const AddProduct = () => {

    //context user data
    const { user } = useUserAuth();
    // console.log(user,'AddProduct user')

    //res after send form
    const [sendRes,setSendRes] = useState({});

    //agree with policy
    const [policyAgree,setPolicyAgree] = useState(false);

    //values for select and input(image)
    const [selectCategory,setSelectCategory] = useState('');
    const [selectSubCategory,setSubSelectCategory] = useState('');
    const [selectPay,setSelectPay] = useState('');
    const [selectDelivery,setSelectDelivery] = useState('');
    const [images,setImages] = useState([]);

    const productId = (user && user.uid) + String(Date.now());
    // console.log(productId)

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
        showPhoneNumber:false,
        showEmailAddress:false,
    });

    // console.log(dataForm,'dataForm addProducts')
    // console.log(images,'images addProducts')

    //change inputs
    const handleChange = (input,value) => {
        const copy = Object.assign({}, dataForm);
        copy[input] = value;
        setFormData(copy)
    }

    //get input group
    const getFormGroup = (value,req,text,type) => {
        return (
            <div className={"inp-inner"}>
                <label>{text}</label>
                <Form.Control
                    type={type}
                    size={"sm"}
                    required={req}
                    value={dataForm[value]}
                    onChange={e => handleChange(value,e.target.value)}
                    placeholder={req ? "Обязательно к заполнению" : ""}
                />
            </div>
        )
    }

    //send form
    const handleSend = e => {
        e.preventDefault()

        if (!dataForm.showPhoneNumber && !dataForm.showEmailAddress){
            setSendRes({type:'error',text:'Выберите способ связи с вами.'})
            return false;
        }
        if (!selectCategory || !selectSubCategory){
            setSendRes({type:'error',text:'Выберите категорию и подкатегорию товара.'})
            return false;
        }

        handleAddProducts(e, user.uid, productId, dataForm, selectCategory, selectSubCategory, selectDelivery, selectPay, images)
            .then(() => setFormData({
                title:'',price:'',
                amount:'', description:'',
                characteristics:'', minOrder:'',
                colors:'', location:'',
                sizes:'', deliveryPeriod:'',
                showPhoneNumber:false, showEmailAddress:false,
            }))
            .then(() => setSelectCategory(''))
            .then(() => setSubSelectCategory(''))
            .then(() => setSelectPay(''))
            .then(() => setSelectDelivery(''))
            .then(() => setImages([]))
            .then(() => setPolicyAgree(false))
            .then(() => setSendRes({type:'mess',text:'Товар успешно добавлен'}))
            .catch(() => setSendRes({type:'error',text:'Ошибка добавления товара'}))
            .finally(() => setTimeout(() => setSendRes({}),8000))
    }

    return (
        <Form onSubmit={e => handleSend(e)} className={'AddProduct'}>

            <div className={"inner selects"}>
                <h5>Выберите категорию и подкатегорию для вашего товара</h5>

                <div className={"inp-inner half"}>
                    <label>Выберите категорию (после этого будет доступен выбор подкатегории)</label>
                    <AddProductSelect
                        state={selectCategory}
                        setState={setSelectCategory}
                        text={'категорию'}
                        url={'/categories'}
                    />
                </div>

                {//select for subcategories
                    selectCategory &&
                    <div className={"inp-inner half"}>
                        <AddProductSelect
                            state={selectSubCategory}
                            setState={setSubSelectCategory}
                            text={'подкатегорию'}
                            url={`/categories/${selectCategory}/subcategories`}
                        />
                    </div>
                }
            </div>

            <div className={"inner"}>
                <h5>Основная информация*</h5>
                {getFormGroup("title",true,"Название товара","text")}
                {getFormGroup("price",true,"Цена товара (за 1шт). В рублях.","number")}
                {getFormGroup("amount",true,"Количество товара","number")}
            </div>

            <div className={"inner"}>
                <h5>Описание товара и характеристики</h5>

                <div className={"inp-inner"}>
                    <label>Опишите товар подробнее</label>
                    <Form.Control
                        size={"sm"}
                        required
                        value={dataForm.description}
                        onChange={e => handleChange('description',e.target.value)}
                        as="textarea"
                        placeholder={"Описание (Обязательно к заполнению)"}
                    />
                </div>

                <div className={"inp-inner"}>
                    <label>Укажите характеристики товара</label>
                    <Form.Control
                        size={"sm"}
                        value={dataForm.characteristics}
                        onChange={e => handleChange('characteristics',e.target.value)}
                        as="textarea"
                        placeholder={"Характеристики"}
                    />
                </div>
            </div>

            <div className={"inner"}>
                <h5>Доставка и оплата</h5>
                {getFormGroup("minOrder",true,"Минимальный заказ","number")}

                <AddProductDeliverPaySelects
                    selectPay={selectPay}
                    setSelectPay={setSelectPay}
                    selectDelivery={selectDelivery}
                    setSelectDelivery={setSelectDelivery}
                />
            </div>

            <div className={"inner"}>
                <h5>Дополнительная информация (Если есть)</h5>

                {getFormGroup("colors",false,"Цвета (через пробел)","text")}
                {getFormGroup("location",false,"Место нахождения товара","text")}
                {getFormGroup("sizes",false,"Размеры (через пробел)","text")}
                {getFormGroup("deliveryPeriod",false,"Срок доставки (дни)","number")}
            </div>


            <div className="inner">
                <h5>Добавьте фото вашего товара</h5>

                <Form.Control
                    size={"sm"}
                    required
                    onChange={e => setImages([...e.target.files])}
                    type="file"
                    multiple
                />
            </div>

            <div className={"checkboxes-container"}>
                <h5>Выберите способ связи с вами</h5>
                <div className={"checkbox-container"}>
                    <Form.Check
                        type="switch"
                        checked={dataForm.showPhoneNumber}
                        onChange={() => handleChange('showPhoneNumber',!dataForm.showPhoneNumber)}
                    />
                    <label>Показывать номер телефона</label>
                </div>

                <div className={"checkbox-container"}>
                    <Form.Check
                        type="switch"
                        checked={dataForm.showEmailAddress}
                        onChange={() => handleChange('showEmailAddress',!dataForm.showEmailAddress)}
                    />
                    <label>Показывать электронную почту</label>
                </div>
            </div>

            <div className={"policy-container"}>
                <Form.Check
                    type="switch"
                    checked={policyAgree}
                    onChange={() => setPolicyAgree(!policyAgree)}
                />
                <label>
                    Размещая товар на нашей площадке вы соглашаетесь с
                    <Link to={"/privacyPolicy"}>политикой обработки персональных данных</Link> и
                    <Link to={"/websiteRules"}>правилами пользования площадкой</Link>.
                </label>
            </div>

            {//res after send form
                Boolean(Object.values(sendRes).length) &&
                <Alert variant={sendRes.type === 'error' ? 'danger' : 'success'} className={"small p-2"}>
                    {sendRes.text}
                </Alert>
            }

            <button
                disabled={!policyAgree}
                className={"but-green px-5"}
                type={"submit"}
            >
                Разместить объявление
            </button>
            {//check if policy
                !policyAgree &&
                <p className={"small mt-2 mb-0 opacity-50"}>
                    Примите условия соглашения для возможности выкладывать товар
                </p>
            }
        </Form>
    );
};

export default AddProduct;
