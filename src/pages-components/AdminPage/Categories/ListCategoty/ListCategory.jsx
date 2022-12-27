import React, {useState} from 'react';
import {useGetCategory} from "../../../../pages-functions/AdminPage/Categories/useGetCategory";
import {ListGroup, Form, Badge} from "react-bootstrap";
import ListItemCategory from "./ListItemCategory";

const ListCategory = () => {

    //categories states and get data
    const categories = useGetCategory("/categories")
    // console.log(categories,"categories list")

    //for select input
    const [selectCategory,setSelectCategory] = useState('')
    //for get data subcategories
    const subcategories = useGetCategory(`/categories/${selectCategory}/subcategories`)
    //console.log(subcategories,"subcategories list")

    return (
        <div className={`ListCategory w-100 p-1 mt-2 mb-2 border`}>

            {/*categories*/}
            <h4 className={`mt-1 mx-1`}>
                <Badge>Список катеорий</Badge>
            </h4>
            <ListGroup>
                {
                    categories.length?
                    categories.map(category => (
                        <ListItemCategory key={category.id} category={category} />
                    )):
                    <Badge>Нет данных</Badge>
                }
            </ListGroup>

            {/*subcategories*/}
            <h4 className={`mt-3 mx-1`}>
                <Badge>Список подкатегорий</Badge>
            </h4>
            {/*for select parent category for then show sub*/}
            <Form.Select
                value={selectCategory}
                onChange={e => setSelectCategory(e.target.value)}
                className={`mb-1 mx-1 w-50`}
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
            <ListGroup>
                {
                    subcategories.length?
                        subcategories.map(subcategory => (
                            <ListItemCategory
                                key={subcategory.id}
                                selectCategory={selectCategory}
                                subcategory={subcategory}
                            />
                        )):
                        <Badge>Нет данных</Badge>
                }
            </ListGroup>
        </div>
    );
};

export default ListCategory;
