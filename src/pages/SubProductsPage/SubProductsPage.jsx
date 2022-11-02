import React from 'react';
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import CardProduct from "../../pages-components/AdminPage/Products/CardProduct/CardProduct";

const SubProductsPage = () => {

    const path = (window.location.pathname).split('/');
    // console.log(path)
    //['', 'categories', 'clothes', 'womenSwimsuits']

    const linkDB = `/categories/${path[path.length - 2]}/subcategories/${path[path.length - 1]}/products`;
    const listProducts = useGetCategory(linkDB);
    // console.log(listProducts,'listProducts in SubProductsPage');

    //for title category
    const dataSubCategories = useGetCategory(`/categories/${path[path.length - 2]}/subcategories`);
    const subcategoryTitle = dataSubCategories.filter(sub => sub.id === path[path.length - 1]);

    return (
        <div className={'SubProductsPage container'}>

            <header>
                <Badge bg={"secondary"} className={'my-3'}>
                    <Link style={{color:"white"}} to={`/categories/${path[path.length - 2]}`}>
                        Назад к подкатегориям
                    </Link>
                </Badge><br />

                <Badge className={'mb-2'}>
                    На данной странице показаны товары подкакатегории
                    "{subcategoryTitle.map(sub => (sub.title))}"
                </Badge>
            </header>

            <div className={'d-flex flex-wrap'}>
                {
                    listProducts.length?
                        listProducts.map(product => (
                            <CardProduct key={product.id} product={product} />
                        )):
                        <Badge className={"text-center w-100"}>
                            Товаров в данной категории пока нет.
                        </Badge>
                }
            </div>

        </div>
    );
};

export default SubProductsPage;
