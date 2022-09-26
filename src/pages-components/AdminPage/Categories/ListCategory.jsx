import React, {useState} from 'react';
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
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

    // //for getting category list item
    // const getCategoryListItem = category =>{
    //     return(
    //         <ListGroup.Item className={'d-flex m-1 align-items-center'} key={category.id}>
    //             <img width={120} style={{borderRadius:10}} src={category.image} alt={category.image}/>
    //             <span className={'m-3'}>
    //                 <p className={'m-0'}>ID: {category.id}</p>
    //                 <p className={'m-0'}>Название: {category.title}</p>
    //
    //                 <Button variant={`outline-primary`}>
    //                     Показать подкатегории
    //                 </Button>
    //
    //                 <Button onClick={() => handleDeleteCategory()} variant={`outline-danger`}>
    //                     Удалить
    //                 </Button>
    //             </span>
    //         </ListGroup.Item>
    //     )
    // }

    return (
        <div className={`ListCategory w-100 p-1 mt-2 mb-2 border`}>

            {/*categories*/}
            <h4 className={`mt-3`}>Список катеорий и подкатегорий</h4>
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
