import React, {useState} from 'react';
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
import {Button, ListGroup, Form} from "react-bootstrap";

const ListCategory = () => {

    const [selectCategory,setSelectCategory] = useState('')

    //categories states and get data
    const categories = useGetCategory("/categories")
    // console.log(categories,"categories list")

    //for getting category list item
    const getCategoryListItem = category =>{
        return(
            <ListGroup.Item className={'d-flex m-1 align-items-center'} key={category.id}>
                <img width={120} style={{borderRadius:10}} src={category.image} alt={category.image}/>
                <span className={'m-3'}>
                    <p className={'m-0'}>ID: {category.id}</p>
                    <p className={'m-0'}>Название: {category.title}</p>

                    <Button variant={`outline-primary`}>
                        Показать подкатегории
                    </Button>
                </span>
            </ListGroup.Item>
        )
    }

    return (
        <div className={`ListCategory w-100 p-1 mt-2 mb-2 border`}>

            {/*categories*/}
            <h4 className={`mt-3`}>Список катеорий и подкатегорий</h4>
            <ListGroup>
                {
                    categories.map(category => (
                        getCategoryListItem(category)
                    ))
                }
            </ListGroup>

            {/*subcategories*/}
            <h4 className={`mt-3`}>Список подкатегорий</h4>
            {/*for selec parent categoru for then show sub*/}
            <Form.Select
                value={selectCategory}
                onChange={e => setSelectCategory(e.target.value)}
                className={`mb-1`}
            >
                <option hidden>Выберите родительскую категорию.</option>
                {
                    categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.title}
                        </option>
                    ))
                }
            </Form.Select>
        </div>
    );
};

export default ListCategory;
