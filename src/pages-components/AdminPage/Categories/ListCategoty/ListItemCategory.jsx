//for getting category list item
import {Badge, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import DeleteCategoryButton from "../DeleteCategoryButton";
import RedactCategoryButton from "../RedactCategoryButton";
import {handleRedactCategory} from "../../../../pages-functions/AdminPage/Categories/handleRedactCategory";

const ListItemCategory = ({category,subcategory,selectCategory}) =>{

    //getting url for set in database
    const getUrl = () =>{
        if (category){
            return `/categories/${category.id}`
        }else {
            return `/categories/${selectCategory}/subcategories/${subcategory.id}`
        }
    }

    //check redact categories or sub categories
    const [redact,setRedact] = useState(false);

    //change form inputs
    const handleChange = (value,elem) =>{
        return handleRedactCategory(
            getUrl(),
            (category||subcategory).id,
            elem === "title" ? value : (category||subcategory).title,
            elem === "image" ? value : (category||subcategory).image,
            elem === "iconImage" ? value : (category||subcategory).iconImage,
        )
    };

    //get input for redact category or sub categories
    const getInputRedact = (label,value) =>{
        return (
            <div className={'my-1 d-flex align-items-center'}>
                <Badge>{label}:</Badge>
                <Form.Control
                    className={'mx-2'}
                    value={(category||subcategory)[value]}
                    onChange={e => handleChange(e.target.value,value)}
                />
            </div>
        )
    }

    return(
        <ListGroup.Item className={'d-flex m-1 align-items-center'} key={(category||subcategory).id}>

            <img width={90} src={(category||subcategory).image} alt={(category||subcategory).title}/>
            <img width={90} src={(category||subcategory).iconImage} alt={(category||subcategory).title}/>

            <span className={'m-3'}>
                {
                    redact?
                        <>
                            {getInputRedact('Название','title')}
                            {getInputRedact('Картинка','image')}
                            {getInputRedact('Иконка','iconImage')}
                        </>:
                        <p className={'mb-2 d-flex align-items-center'}>
                            <Badge>ID:</Badge>
                            {(category||subcategory).id}
                            <Badge className={"mx-2"}>Название:</Badge>
                            {(category||subcategory).title}
                        </p>
                }

                {/*delete category button with confirm*/}
                {!redact && <DeleteCategoryButton url={getUrl(getUrl(),(category||subcategory))} text={false} />}

                {/*redact category button*/}
                <RedactCategoryButton redact={redact} setRedact={setRedact} />
            </span>
        </ListGroup.Item>
    )
}

export default ListItemCategory;
