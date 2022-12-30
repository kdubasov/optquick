import React from 'react';
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {Link} from "react-router-dom";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import SubCard from "./SubCard/SubCard";
import "./SubcategoriesPage.css";

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
                <Link to={`/categories`}>
                    Вернуться к категориям
                </Link>

                {
                    Boolean(dataSubcategories && dataSubcategories.length) &&
                    <h3>
                        На данной странице показаны подкатегории категории
                        "{categoryTitle.map(categ => (categ.title))}"
                    </h3>
                }
            </header>

            {
                Boolean(dataSubcategories && dataSubcategories.length) ?
                    <div className={"sub-container"}>
                        {
                            dataSubcategories.map(sub => (
                                <SubCard key={sub.id} sub={sub} />
                            ))
                        }
                    </div>:
                    <p className={"no-products"}>
                        Товаров в данной категории пока нет.
                        В скором времени мы наполним товарами все категории,
                        а сейчас вы можете
                        <Link to={`/categories}`}>
                            вернуться назад
                        </Link>
                        и посмотреть другие товары. Спасибо за понимание!
                    </p>
            }
        </div>
    );
};

export default SubcategoriesPage;
