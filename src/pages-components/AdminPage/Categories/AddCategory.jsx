import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {handleAddCategory} from "../../../pages-functions/AdminPage/Categories/handleAddCategory";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";

const AddCategory = ({setRes}) => {

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
                    required={true}
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
        if (state === subCategory && !selectVal){
            setRes({error:"Выберите родительскую категорию.",res:false})
            return false
        }
        await handleAddCategory(e,url,state.id,state.title,state.image)
            .then(() => setRes({error:false,res:"Добавлено."}))
            .catch(() => setRes({error:"Ошибка.",res:false}))

        //delete message
        setTimeout(() => setRes({error:false,res:false}),4000)

        setState({id:'', title:'', image:'',})
    }

    return (
        <div className={`AddCategory w-100 p-1 border d-flex flex-wrap`}>

            <h4 className={`w-100 m-1`}>Добавление категорий и подкатегорий</h4>

            {/*category*/}
            <Form className={`w-25 border p-3 m-1`} onSubmit={e => handleSendForm(e,"/categories",category,setCategory)}>
                <h5>Добавить категорию</h5>

                {Object.keys(category).map(elem =>(
                    <div key={elem}>
                        {getInput(elem,category,setCategory)}
                    </div>
                ))}

                <Button variant={"outline-dark"} type={"submit"}>Добавить</Button>
            </Form>

            {/*subcategory*/}
            <Form className={`w-25 border p-3 m-1`} onSubmit={e => handleSendForm(e,`/categories/${selectVal}/subcategories`,subCategory,setSubCategory)}>
                <h5>Добавить подкатегорию</h5>

                <Form.Select value={selectVal} onChange={e => setSelectVal(e.target.value)}>
                    <option hidden={true}>Выберите родительскую категорию.</option>
                    {useGetCategory("/categories").map(elem =>(
                        <option key={elem.id} value={elem.id}>
                            {elem.title}
                        </option>
                    ))}
                </Form.Select>

                {Object.keys(subCategory).map(elem =>(
                    <div key={elem}>
                        {getInput(elem,subCategory,setSubCategory)}
                    </div>
                ))}

                <Button variant={"outline-dark"} type={"submit"}>Добавить</Button>
            </Form>
        </div>
    );
};

export default AddCategory;