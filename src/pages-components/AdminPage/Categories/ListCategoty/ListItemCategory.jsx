//for getting category list item
import {Badge, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import DeleteCategoryButton from "../DeleteCategoryButton";
import RedactCategoryButton from "../RedactCategoryButton";
import {handleRedactCategory} from "../../../../pages-functions/AdminPage/Categories/handleRedactCategory";

const ListItemCategory = ({category,subcategory}) =>{

    //check category or sub select now
    const selectValue = category || subcategory;

    //getting url for set in database
    const getUrl = () =>{
        if (category){
            return `/categories/${category.id}`
        }else {
            return `/categories/${subcategory.category}/subcategories/${subcategory.id}`
        }
    }

    //check redact categories or sub categories
    const [redact,setRedact] = useState(false);

    //change form inputs
    const handleChange = (value,elem) =>{
        return handleRedactCategory(
            getUrl(),
            selectValue.id,
            elem === "title" ? value : selectValue.title,
            elem === "image" ? value : selectValue.image,
            elem === "iconImage" ? value : selectValue.iconImage,
            selectValue.category,
        )
    };

    //get input for redact category or sub categories
    const getInputRedact = (label,value) =>{
        return (
            <div className={'my-1 d-flex align-items-center'}>
                <Badge>{label}:</Badge>
                <Form.Control
                    className={'mx-2'}
                    value={selectValue[value]}
                    onChange={e => handleChange(e.target.value,value)}
                />
            </div>
        )
    }

    return(
        <ListGroup.Item className={'d-flex m-1 align-items-center'}>

            <img width={90} src={selectValue.image} alt={selectValue.title}/>
            <img width={90} src={selectValue.iconImage} alt={selectValue.title}/>

            <span className={'m-3'}>
                {
                    redact?
                        <>
                            {getInputRedact('Название','title')}
                            {getInputRedact('Картинка','image')}
                            {getInputRedact('Иконка','iconImage')}
                        </>:
                        <ListGroup horizontal className={"small mb-2"}>
                            <ListGroup.Item>ID: {selectValue.id}</ListGroup.Item>
                            <ListGroup.Item>Название: {selectValue.title}</ListGroup.Item>
                        </ListGroup>
                }

                {/*delete category button with confirm*/}
                {!redact && <DeleteCategoryButton url={getUrl(getUrl(),selectValue)} text={false} />}

                {/*redact category button*/}
                <RedactCategoryButton redact={redact} setRedact={setRedact} />
            </span>
        </ListGroup.Item>
    )
}

export default ListItemCategory;
