import React from 'react';
import {Badge, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {Link} from "react-router-dom";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";

const SubcategoriesPage = () => {

    const path = window.location.pathname;

    const dataSubcategories = useGetCategory(`/categories/${getPathLastWord(path)}/subcategories`);
    // console.log(dataSubcategories,'SubcategoriesPage data');

    //for title category
    const dataCategories = useGetCategory("/categories");
    const categoryTitle = dataCategories.filter(category => category.id === getPathLastWord(path));
    // console.log(categoryTitle)

    return (
        <div className={'SubcategoriesPage container'}>

            <Badge bg={"secondary"} className={'my-3'}>
                <Link style={{color:"white"}} to={`/categories`}>
                    Назад к категориям
                </Link>
            </Badge><br />

            <Badge className={'mb-2'}>
                На данной странице показаны подкатегории категории
                "{categoryTitle.map(categ => (categ.title))}"
            </Badge>

            {
                (dataSubcategories && dataSubcategories.length) ?
                    <ListGroup>
                        {
                            dataSubcategories.map(sub => (
                                <ListGroupItem className={'d-flex align-items-center'} key={sub.id}>
                                    <img style={{borderRadius:5}} height={120} src={sub.image} alt=""/>
                                    <Link to={`/`} className={'m-0 mx-2'}>{sub.title}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>:
                    <Spinner animation={'border'} variant={"primary"} />
            }
        </div>
    );
};

export default SubcategoriesPage;
