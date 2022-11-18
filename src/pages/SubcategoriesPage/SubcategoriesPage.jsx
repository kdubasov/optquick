import React from 'react';
import {Alert, Badge, ListGroup} from "react-bootstrap";
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {Link} from "react-router-dom";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import SubCard from "../../pages-components/SubcategoriesComps/SubCard";

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

            <header>
                <Badge bg={"secondary"} className={'my-3'}>
                    <Link style={{color:"white"}} to={`/categories`}>
                        Назад к категориям
                    </Link>
                </Badge><br />

                {
                    Boolean(dataSubcategories && dataSubcategories.length) &&
                    <Badge className={'mb-2'}>
                        На данной странице показаны подкатегории категории
                        "{categoryTitle.map(categ => (categ.title))}"
                    </Badge>
                }
            </header>

            {
                Boolean(dataSubcategories && dataSubcategories.length) ?
                    <ListGroup>
                        {
                            dataSubcategories.map(sub => (
                                <SubCard key={sub.id} sub={sub} />
                            ))
                        }
                    </ListGroup>:
                    <Alert className={"w-50 p-2 small"}>
                        Подкатегорий в данной категории пока нет.
                    </Alert>
            }
        </div>
    );
};

export default SubcategoriesPage;
