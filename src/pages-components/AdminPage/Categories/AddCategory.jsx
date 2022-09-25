import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {handleAddCategory} from "../../../pages-functions/AdminPage/Categories/handleAddCategory";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";

const AddCategory = () => {

    //for error or result form
    const [err,setErr] = useState(false)
    const [res,setRes] = useState(false)

    //inps value
    const [category,setCategory] = useState({
        id:'',
        title:'',
        image:'',
    })


    //select value
    const [selectVal,setSelectVal] = useState('')
    //inps value
    const [subCategory,setSubCategory] = useState({
        id:'',
        title:'',
        image:'',
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
            <FloatingLabel label={value} className={`mt-1 mb-1`}>
                <Form.Control
                    value={state[value]}
                    onChange={e => handleChange(e.target.value,value,state,setState)}
                    placeholder={value}
                />
            </FloatingLabel>
        )
    }

    //send form func with check errors or res
    const handleSendForm = async (e,url,state,setState) =>{
        e.preventDefault()
        await handleAddCategory(e,url,state.id,state.title,state.image)
            .then(() => setRes(true))
            .catch(() => setErr(true))

        if (res){//check res or err
            setTimeout(() => setRes(false),5000)
        }else {
            setTimeout(() => setRes(false),5000)
        }
        setState({id:'', title:'', image:'',})
    }

    return (
        <div className={`AddCategory w-100 d-flex`}>
            <Form className={`w-50 border p-3 m-3`} onSubmit={e => handleSendForm(e,"/categories",category,setCategory)}>

                <h5>Добавить категорию</h5>

                {
                    Object.keys(category).map(elem =>(
                        <div key={elem}>
                            {getInput(elem,category,setCategory)}
                        </div>
                    ))
                }

                <span>
                    {res && "Добавлено."}
                    {err && "Ошибка!"}
                </span>

                <Button type={"submit"}>Add</Button>
            </Form>

            <Form className={`w-50 border p-3 m-3`} onSubmit={e => handleSendForm(e,`/categories/${selectVal}/subcategories`,subCategory,setSubCategory)}>

                <h5>Добавить подкатегорию</h5>

                <Form.Select value={selectVal} onChange={e => setSelectVal(e.target.value)}>
                    {
                        useGetCategory(["categories"]).map(elem =>(
                            <option key={elem.id} value={elem.id}>
                                {elem.title}
                            </option>
                        ))
                    }
                </Form.Select>

                {
                    Object.keys(subCategory).map(elem =>(
                        <div key={elem}>
                            {getInput(elem,subCategory,setSubCategory)}
                        </div>
                    ))
                }

                <span>
                    {res && "Добавлено."}
                    {err && "Ошибка!"}
                </span>

                <Button type={"submit"}>Add</Button>
            </Form>
        </div>
    );
};

export default AddCategory;