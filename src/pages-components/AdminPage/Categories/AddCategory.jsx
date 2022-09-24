import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {handleAddCategory} from "../../../pages-functions/AdminPage/Categories/handleAddCategory";

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

    //for changes inputs
    const handleChange = (value,id) =>{
        const copy  = Object.assign({}, category);
        copy[id] = value;
        setCategory(copy);
    }

    //get input for verstka
    const getInput = value =>{
        return(
            <FloatingLabel label={value} className={`mt-1 mb-1`}>
                <Form.Control
                    value={category[value]}
                    onChange={e => handleChange(e.target.value,value)}
                    placeholder={value}
                />
            </FloatingLabel>
        )
    }

    //send form func with check errors or res
    const handleSendForm = async (e,url) =>{
        e.preventDefault()
        await handleAddCategory(e,url,category.id,category.title,category.image)
            .then(() => setRes(true))
            .catch(() => setErr(true))

        if (res){//check res or err
            setTimeout(() => setRes(false),5000)
        }else {
            setTimeout(() => setRes(false),5000)
        }
        setCategory({id:'', title:'', image:'',})
    }

    return (
        <div className={`AddCategory w-100 d-flex`}>
            <Form className={`w-50 border p-3`} onSubmit={e => handleSendForm(e,"/categories")}>

                <h5>Добавить категорию</h5>

                {
                    Object.keys(category).map(elem =>(
                        <div key={elem}>
                            {getInput(elem)}
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