import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {handleAddCategory} from "../../../pages-functions/AdminPage/Categories/handleAddCategory";

const AddCategory = () => {

    const [err,setErr] = useState(false)
    const [res,setRes] = useState(false)

    const [category,setCategory] = useState({
        id:'',
        title:'',
        image:'',
    })

    const handleChange = (value,id) =>{
        const copy  = Object.assign({}, category);
        copy[id] = value;
        setCategory(copy);
    }

    const getInput = value =>{
        return(
            <input
                placeholder={value}
                value={category[value]}
                onChange={e => handleChange(e.target.value,value)}
            />
        )
    }

    const handleSendForm = async (e) =>{
        e.preventDefault()
        await handleAddCategory(e,"/categories",category.id,category.title,category.image)
            .then(() => setRes(true))
            .catch(() => setErr(true))

        if (res){
            setTimeout(() => setRes(false),5000)
        }else {
            setTimeout(() => setRes(false),5000)
        }
        setCategory({id:'', title:'', image:'',})
    }

    return (
        <div className={`AddCategory`}>
            <form onSubmit={e => handleSendForm(e)}>

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
            </form>
        </div>
    );
};

export default AddCategory;