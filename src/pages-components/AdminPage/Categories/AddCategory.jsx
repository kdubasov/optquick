import React, {useState} from 'react';
import {Badge, Button, Form} from "react-bootstrap";
import {handleAddCategory} from "../../../pages-functions/AdminPage/Categories/handleAddCategory";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";

const AddCategory = ({setRes}) => {

    //inps value
    const [category,setCategory] = useState({
        id:'',
        title:'',
        image:'',
        iconImage:'',
    })


    //select value
    const [selectVal,setSelectVal] = useState('')
    //inps value
    const [subCategory,setSubCategory] = useState({
        id:'',
        title:'',
        image:'',
        iconImage:'',
    })

    //for changes inputs
    const handleChange = (value,id,state,setState) =>{
        const copy  = Object.assign({}, state);
        copy[id] = value;
        setState(copy);
    }

    //get input for verstka
    const getInput = (value,state,setState) =>{
        return(
            <Form.Control
                required={true}
                value={state[value]}
                onChange={e => handleChange(e.target.value,value,state,setState)}
                placeholder={value}
            />
        )
    }

    const getListInputs = (state,setState) =>{
        return(
            Object.keys(state).map(elem =>(
                    <div key={elem}>
                        {getInput(elem,state,setState)}
                    </div>
                ))
        )
    }

    //send form func with check errors or res
    const handleSendForm = async (e,url,state,setState) =>{
        e.preventDefault()
        if (state === subCategory && !selectVal){
            setRes({error:"Выберите родительскую категорию.",res:false})
            return false
        }
        await handleAddCategory(e,url,state,state === subCategory && selectVal)
            .then(() => setRes({error:false,res:"Добавлено."}))
            .catch(() => setRes({error:"Ошибка.",res:false}))
            .finally(() => setSelectVal(""))

        //delete message
        setTimeout(() => setRes({error:false,res:false}),4000)

        setState({id:'', title:'', image:'',iconImage:'',})
    }

    return (
        <div className={`AddCategory w-100 p-1 border d-flex flex-wrap`}>

            <h4 className={`w-100 m-1`}>
                <Badge>Добавление категорий и подкатегорий</Badge>
            </h4>

            {/*category*/}
            <Form className={`w-25 border p-2 m-1`} onSubmit={e => handleSendForm(e,"/categories",category,setCategory)}>
                <h6>Добавить категорию</h6>

                {getListInputs(category,setCategory)}

                <Button size={"sm"} variant={"outline-dark"} type={"submit"}>Добавить</Button>
            </Form>

            {/*subcategory*/}
            <Form className={`w-25 border p-2 m-1`} onSubmit={e => handleSendForm(e,`/categories/${selectVal}/subcategories`,subCategory,setSubCategory)}>
                <h6>Добавить подкатегорию</h6>

                <Form.Select value={selectVal} onChange={e => setSelectVal(e.target.value)}>
                    <option hidden>Выберите родительскую категорию.</option>
                    {useGetCategory("/categories").map(elem =>(
                        <option key={elem.id} value={elem.id}>
                            {elem.title}
                        </option>
                    ))}
                </Form.Select>

                {getListInputs(subCategory,setSubCategory)}

                <Button size={"sm"} variant={"outline-dark"} type={"submit"}>Добавить</Button>
            </Form>
        </div>
    );
};

export default AddCategory;
