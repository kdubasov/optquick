//for getting category list item
import {Badge, Button, ListGroup} from "react-bootstrap";
import React from "react";
import {handleDeleteCategory} from "../../../pages-functions/AdminPage/Categories/handleDeleteCategory";

const ListItemCategory = ({category,subcategory,selectCategory}) =>{

    const getUrl = () =>{
        if (category){
            return `/categories/${category.id}`
        }else {
            return `/categories/${selectCategory}/subcategories/${subcategory.id}`
        }
    }

    return(
        <ListGroup.Item className={'d-flex m-1 align-items-center'} key={(category||subcategory).id}>
            <img width={120} style={{borderRadius:10}} src={(category||subcategory).image} alt={(category||subcategory).image}/>
            <span className={'m-3'}>
                    <p className={'m-0'}>
                        <Badge>ID:</Badge> {(category||subcategory).id}
                    </p>

                    <p className={'mb-1'}>
                        <Badge>Название:</Badge> {(category||subcategory).title}
                    </p>

                    <Button
                        size={"sm"}
                        variant={`outline-danger`}
                        onClick={() => handleDeleteCategory(getUrl())}
                    >
                        Удалить
                    </Button>

                    <Button
                        size={"sm"}
                        className={`mx-2`}
                        variant={"secondary"}
                    >
                        Редактировать
                    </Button>
                </span>
        </ListGroup.Item>
    )
}

export default ListItemCategory;